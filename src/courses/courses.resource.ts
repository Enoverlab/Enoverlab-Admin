import { Components } from "../admin/component-loader.js";
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
        actions: {
            new:{
              isAccessible: ({ currentAdmin }) => currentAdmin.role === 'superAdmin',
              isVisible : ({currentAdmin})=>{
                return currentAdmin.role === 'superAdmin'
              }
            },
        },
    }
}