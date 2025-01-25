import { courseModel, moduleModel } from "./courses.schema.js";
export const coursesResource = {
    resource: courseModel,
    options: {
        parent: 'Enoverlab Short Course',
    }
};
export const moduleResource = {
    resource: moduleModel,
    options: {
        parent: 'Enoverlab Short Course',
    }
};
