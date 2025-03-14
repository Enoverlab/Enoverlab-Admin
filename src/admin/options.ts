import { AdminJSOptions } from 'adminjs';
import { coursesResource,moduleResource } from '../courses/courses.resource.js';

import componentLoader from './component-loader.js';
import { authorResource, blogResource } from '../blog/blog.resources.js';
import { assessmentQuestionResource } from '../webAssessment/webAssessmentResource.js';




const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    coursesResource,
    moduleResource,
    blogResource,
    authorResource,
    assessmentQuestionResource
  ],
  databases: [],
};

export default options;
