import componentLoader from "../admin/component-loader.js";
import { authorModel, blogModel } from "./blog.schema.js";
import cloudinary from '../config/cloudinary.config.js';
import { ValidationError } from 'adminjs'


const Components = {
    UploadImage: componentLoader.add('UploadImage', '../components/UploadImage.tsx'),
}

export const blogResource = {
  resource: blogModel, // Assuming Course is a Mongoose model or a Sequelize model
  options: {
    parent : 'Enoverlab Blog',
    properties : {
        content : {
          type : 'richtext'
        },
        image : {
          components: {
            edit : Components.UploadImage
          },
        },
        description : {
          description: "Maximum characters of 100",
        },
        createdAt : {
          isVisible : false
        },
        updatedAt : {
          isVisible : false
        }
    },
    actions: {
      new: {
        before: async (request) => {
          if (request.payload){
            const {title,content,tag,author,image,status,description} = request.payload
            if(!description || description.length > 100){
              throw new ValidationError({description : {message : 'Invalid input, maximum length of 100 characters'}})
            }
            if(!title || !content || !tag || !author || !image || !status){
              if(!title){
                throw new ValidationError({title : {message : 'Please include a title'}})
              }else if (!content){
                throw new ValidationError({content : {message : 'Field is required'}})
              }
              else if(!image){
                throw new ValidationError({image : {message : 'Image is required'}})
              }else if(!tag){
                throw new ValidationError({tag : {message : 'Kindly include a tag'}})
              }else if(!author){
                throw new ValidationError({author : {message : 'Kindly include an author'}})
              }else if(!status){
                throw new ValidationError({status : {message : 'Kindly include an status'}})
              }
            }else{
              const uploadedFile = await cloudinary.uploader.upload(image.path, { folder: 'blog_coverart' });
              request.payload = {
                ...request.payload,
                image: uploadedFile.secure_url,
              };
            }
            return request;
          }
        },
      },
      edit : {
        before : async(request)=>{
          if(request.payload && request.payload.title){
            const {title, content, tag, author,image,status,description} = request.payload
            if(!description || description.length > 100){
              throw new ValidationError({description : {message : 'Invalid input, maximum length of 100 characters'}})
            }
            if(!title || !content || !tag || !author || !image || !status){
              if(!title){
                throw new ValidationError({title : {message : 'Please include a title'}})
              }else if (!content){
                throw new ValidationError({content : {message : 'Field is required'}})
              }
              else if(!image){
                throw new ValidationError({image : {message : 'Image is required'}})
              }else if(!tag){
                throw new ValidationError({tag : {message : 'Kindly include a tag'}})
              }else if(!author){
                throw new ValidationError({author : {message : 'Kindly include an author'}})
              }else if(!status){
                throw new ValidationError({status : {message : 'Kindly include an status'}})
              }
            }
            if(image.path){
              const uploadedFile = await cloudinary.uploader.upload(image.path, { folder: 'blog_coverart' });
              request.payload = {
                ...request.payload,
                image: uploadedFile.secure_url,
              };
            }
          }
          return request
        }
      }
    }
  }   
};


export const authorResource = {
    resource : authorModel,
    options: {
      parent : 'Enoverlab Blog',
      properties : {
        image : {
          components: {
            edit : Components.UploadImage
          },
        },
        createdAt : {
          isVisible : false
        },
        updatedAt : {
          isVisible : false
        }
      },
      actions : {
        new: {
          before: async (request) => {
            if (request.payload){
              const {name,image} = request.payload
              if(!name || !image){
                if(!name){
                  throw new ValidationError({title : {message : 'Please include a author name'}})
                }else if(!image){
                  throw new ValidationError({image : {message : 'Image is required'}})
                }
              }else{
                const uploadedFile = await cloudinary.uploader.upload(image.path, {folder: 'author_images' });
                request.payload = {
                  ...request.payload,
                  image: uploadedFile.secure_url,
                };
              }
              return request;
            }
          },
        },
        edit : {
          before : async(request)=>{
            if(request.payload && request.payload.name){
              const {image, name}= request.payload
              if(!image || !name){
                if(!image){
                  throw new ValidationError({image : {message : 'Image Field is required'}})
                }else if(!name){
                  throw new ValidationError({name : {message : 'Name Field is required'}})
                }
              }
              if(image.path){
                const uploadedFile = await cloudinary.uploader.upload(image.path, {folder: 'author_images' });
                request.payload = {
                  ...request.payload,
                  image: uploadedFile.secure_url,
                };
              }
            }
            return request
          }
        }
      }
    }
}



