import { ValidationError } from "adminjs";
import { Components } from "../admin/component-loader.js";
import cloudinary from '../config/cloudinary.config.js';
import {courseModel, moduleModel} from "./courses.schema.js"
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
          }
        },
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
            const {title,content,lessonVideo,courseId} = request.payload
            if(!title || !content || !lessonVideo || !courseId){
              if(!title){
                throw new ValidationError({title : {message : 'Please include a title'}})
              }else if (!content){
                throw new ValidationError({content : {message : 'Field is required'}})
              }
              else if(!lessonVideo){
                throw new ValidationError({lessonVideo : {message : 'Image is required'}})
              }else if(!courseId){
                throw new ValidationError({courseId : {message : 'Kindly include a tag'}})
              }
            }else if(lessonVideo.path){
              try {
                const uploadedFile = await cloudinary.uploader.upload(lessonVideo.path, { 
                  resource_type: 'video',
                  chunk_size: 6000000,

                  folder: `course_${courseId}` 
                });
                console.log(uploadedFile)
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
            const {title,content,lessonVideo,courseId} = request.payload
            if(!title || !content || !lessonVideo || !courseId){
              if(!title){
                throw new ValidationError({title : {message : 'Please include a title'}})
              }else if (!content){
                throw new ValidationError({content : {message : 'Field is required'}})
              }
              else if(!lessonVideo){
                throw new ValidationError({lessonVideo : {message : 'Image is required'}})
              }else if(!courseId){
                throw new ValidationError({courseId : {message : 'Kindly include a tag'}})
              }
            }else if(lessonVideo.path){
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
      }
    },
  }
}