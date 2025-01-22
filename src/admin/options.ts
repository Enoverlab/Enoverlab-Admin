import { AdminJSOptions } from 'adminjs';
import {courseModel} from "../courses/courses.schema.js"
import {moduleModel} from "../courses/courses.schema.js"

import componentLoader from './component-loader.js';


const coursesResource = {
  resource: courseModel, // Assuming Course is a Mongoose model or a Sequelize model
  options: {
    actions: {
      list: {
        // action options here
        isAccessible: true, // Ensure the action is accessible
        // Add any filters or custom logic if needed
      }
    }
  }
};

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    coursesResource,
    moduleModel,
  ],
  databases: [],
};

export default options;
