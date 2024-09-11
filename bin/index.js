import loadApp from '../src/index.js';

const app = await loadApp();
const port = 3000;

app.listen({ port }, () => {
  console.log(`App listening on port ${port}`);
});
