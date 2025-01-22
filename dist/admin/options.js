import { courseModel } from "../courses/courses.schema.js";
import { moduleModel } from "../courses/courses.schema.js";
import componentLoader from './component-loader.js';
const options = {
    componentLoader,
    rootPath: '/admin',
    resources: [
        courseModel,
        moduleModel
    ],
    databases: [],
};
export default options;
