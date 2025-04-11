import { ValidationError } from "adminjs";
import { Components } from "../admin/component-loader.js";
import cloudinary from '../config/cloudinary.config.js';
import {courseModel, moduleModel} from "./courses.schema.js"

const deleteAction = (entityName,entityType)=> (async (response, request, context) => {
  const { record } = context;

  if (record && record.params[entityName]) {
    try {
      const entity = record.params[entityName];

      // Extract public ID from the URL
      const parts = entity.split('/');
      const fileName = parts[parts.length - 1]; // e.g., myvideo.mp4
      const folder = parts[parts.length - 2]; // e.g., course_123
      const publicId = `${folder}/${fileName.split('.')[0]}`; // remove extension

      // Delete from Cloudinary
      await cloudinary.uploader.destroy(publicId, {
        resource_type: entityType
      });

      console.log(`Deleted ${entityType} from Cloudinary: ${publicId}`);
    } catch (err) {
      console.error(`Error deleting ${entityType} from Cloudinary:`, err);
      // Optional: throw a ValidationError or just log
      throw new ValidationError({ [entityName]: { message: 'Failed to delete video' } });
    }
  }

  return response;
});

export const coursesResource = {
    resource: courseModel, // Assuming Course is a Mongoose model or a Sequelize model
    options: {
      parent : 'Enoverlab Short Course',
      properties : {
        courseImg : {
          components : {
            edit : Components.UploadImage
          }
        },
        modules : {
          components : {
            edit : Components.FilteredModules
          }
        },
        ratings : {
          isVisible : false
        },
        averageRating : {
          isVisible : false
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
          isAccessible: ({ currentAdmin }) =>{
            return currentAdmin.role === 'superAdmin'
          },
          isVisible : ({currentAdmin})=>{
            return currentAdmin.role === 'superAdmin'
          },
          before: async (request) => {
            if (request.payload){
              const {courseImg} = request.payload
              Object.entries(request.payload).forEach(([key,value])=>{
                if(Array.isArray(value) && value.length == 0){
                  throw new ValidationError({key : {message : `Please include a ${key}`}})
                }else if(!value){
                  throw new ValidationError({key : {message : `Please include a ${key}`}})
                }
              })
              if(courseImg?.path){
                try {
                  const uploadedFile = await cloudinary.uploader.upload(courseImg.path, { 
                    resource_type: 'image',
                    folder: `course Images` 
                  });
                  request.payload = {
                    ...request.payload,
                    courseImg: uploadedFile.secure_url,
                  };
                } catch (error) {
                  console.log({error})
                }
              }
              return request;
            }
          },
        },
        edit : {
          before: async (request) => {
            if (request.payload){
              const {courseImg} = request.payload
              Object.entries(request.payload).forEach(([key,value])=>{
                if(Array.isArray(value) && value.length == 0){
                  throw new ValidationError({key : {message : `Please include a ${key}`}})
                }else if(!value){
                  throw new ValidationError({key : {message : `Please include a ${key}`}})
                }
              })
              if(courseImg?.path){
                try {
                  const uploadedFile = await cloudinary.uploader.upload(courseImg.path, { 
                    resource_type: 'image',
                    folder: `course Images` 
                  });
                  request.payload = {
                    ...request.payload,
                    courseImg: uploadedFile.secure_url,
                  };
                } catch (error) {
                  console.log({error})
                }
              }
              return request;
            }
          },
        },
        delete : {
          after : deleteAction('courseImg', 'image')
        }
      },
    }
};
export const moduleResource = {
  resource : moduleModel,
  options: {
    parent : 'Enoverlab Short Course',
    properties : {
      lessonVideo : {
        components : {
          edit : Components.UploadVideo
        }
      },
      duration : {
        isVisible : false
      },
      createdAt : {
        isVisible : false
      },
      updatedAt : {
        isVisible : false
      }
    },
    actions: {
      new:{
        isAccessible: ({ currentAdmin }) => currentAdmin.role === 'superAdmin',
        isVisible : ({currentAdmin})=>{
          return currentAdmin.role === 'superAdmin'
        },
        before: async (request) => {
          if (request.payload){
            const {lessonVideo,courseId} = request.payload
            Object.entries(request.payload).forEach(([key,value])=>{
              if(Array.isArray(value) && value.length == 0){
                throw new ValidationError({key : {message : `Please include a ${key}`}})
              }else if(!value){
                throw new ValidationError({key : {message : `Please include a ${key}`}})
              }
            })
            if(lessonVideo?.path){
              try {
                const uploadedFile = await cloudinary.uploader.upload(lessonVideo.path, { 
                  resource_type: 'video',
                  chunk_size: 6000000,
                  folder: `course_${courseId}` 
                });
                request.payload = {
                  ...request.payload,
                  lessonVideo: uploadedFile.secure_url,
                  duration : `${Math.ceil(uploadedFile.duration/60)} min`
                };
              } catch (error) {
                console.log({error})
              }
            }
            return request;
          }
        },
      },
      edit : {
        before: async (request) => {
          if (request.payload){
            const {lessonVideo,courseId} = request.payload
            Object.entries(request.payload).forEach(([key,value])=>{
              if(Array.isArray(value) && value.length == 0){
                throw new ValidationError({key : {message : `Please include a ${key}`}})
              }else if(!value){
                throw new ValidationError({key : {message : `Please include a ${key}`}})
              }
            })
            if(lessonVideo?.path){
              try {
                const uploadedFile = await cloudinary.uploader.upload(lessonVideo.path, { 
                  resource_type: 'video',
                  chunk_size: 6000000, 
                  folder: `course_${courseId}` 
                });
                request.payload = {
                  ...request.payload,
                  lessonVideo: uploadedFile.secure_url,
                  duration : `${Math.ceil(uploadedFile.duration/60)} min`
                };
              } catch (error) {
                console.log({error})
              }
            }
            return request;
          }
        },
      },
      delete : {
        after : deleteAction('lessonVideo', 'video')
      }
    },
  }
}