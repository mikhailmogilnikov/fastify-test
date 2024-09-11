import fastify from 'fastify';
import view from '@fastify/view';
import pug from 'pug';

import addRoutes from './routes/index.js';

export default async () => {
  const app = fastify();
  await app.register(view, { engine: { pug } });

  addRoutes(app);
  return app;
};
