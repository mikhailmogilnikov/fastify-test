import root from './root.js';
import courses from './courses.js';

const controllers = [root, courses];

export default (app) => controllers.forEach((f) => f(app));
