import {courseModel, moduleModel} from "./courses.schema.js"
export const coursesResource = {
    resource: courseModel, // Assuming Course is a Mongoose model or a Sequelize model
    options: {
        parent : 'Enoverlab Short Course',
    }
};
export const moduleResource = {
    resource : moduleModel,
    options: {
        parent : 'Enoverlab Short Course',
    }
}