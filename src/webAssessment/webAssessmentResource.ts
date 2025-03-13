// import cloudinary from '../config/cloudinary.config.js';
import { ValidationError } from 'adminjs'
// import { Components } from "../admin/component-loader.js";
import { assessmentQuestionModel } from './webAssessment.schema.js';

export const assessmentQuestionResource = {
  resource: assessmentQuestionModel, // Assuming Course is a Mongoose model or a Sequelize model
  options: {
    parent : 'Enoverlab Web Assessment',
    properties : {
      'questions.correctAnswer': { type: 'array' },
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
          try {
            const payload = request.payload;
            console.log(payload)
            const assessment = new assessmentQuestionModel(payload);
            await assessment.validate(); // Validate before saving

            return request; // If validation passes, continue
          } catch (error) {
            // Catch Mongoose validation errors and return them
            if (error.name === 'ValidationError') {
              const validationErrors = {};
                // Loop through Mongoose validation errors and attach them to the correct fields
                Object.keys(error.errors).forEach((field,idx) => {
                  if(field === `questions.${idx}.correctAnswer`){
                    validationErrors[`questions.${idx}.correctAnswer.0`] = {
                      message: error.errors[field].message
                    };
                  }else{
                    validationErrors[field] = {
                      message: error.errors[field].message
                    };
                  }
                  
                });

                throw new ValidationError(validationErrors);
            }
            throw error;
          }
        },
      },
      edit : {
        before : async(request)=>{
          if(request.payload ){
            try {
              const payload = request.payload;
              const assessment = new assessmentQuestionModel(payload);
              await assessment.validate(); // Validate before saving

              return request; // If validation passes, continue
            } catch (error) {
              // Catch Mongoose validation errors and return them
              if (error.name === 'ValidationError') {
                const validationErrors = {};

                // Loop through Mongoose validation errors and attach them to the correct fields
                Object.keys(error.errors).forEach((field,idx) => {
                  if(field === `questions.${idx}.correctAnswer`){
                    validationErrors[`questions.${idx}.correctAnswer.0`] = {
                      message: error.errors[field].message
                    };
                  }else{
                    validationErrors[field] = {
                      message: error.errors[field].message
                    };
                  }
                  
                });

                throw new ValidationError(validationErrors);
              }
              throw error;
            }
          }
          return request
        }
      }
    }
  }   
};