import { AdminJSOptions } from 'adminjs';
import { coursesResource,moduleResource } from '../courses/courses.resource.js';

import componentLoader from './component-loader.js';
import { authorResource, blogResource } from '../blog/blog.resources.js';




const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    coursesResource,
    moduleResource,
    blogResource,
    authorResource
  ],
  databases: [],
};

export default options;
