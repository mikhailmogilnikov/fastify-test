import root from './root.js';

const controllers = [root];

export default (app) => controllers.forEach((f) => f(app));
