export default (app) => {
  app.get('/hello', (req, res) => {
    const { name } = req.query;

    if (name) {
      res.send(`Hello, ${name}!`);
    } else {
      res.send('Hello, World!');
    }
  });

  app.get('/redirect', (req, res) => {
    res.redirect('/hello?name=Redirect');
  });

  app.get('/posts/:postId', (req, res) => {
    const { postId } = req.params;
    res.send(`Post - ${postId}`);
  });

  const users = [
    { id: 1, name: 'Misha' },
    { id: 2, name: 'Stepan' },
  ];

  app.get('/users', (req, res) => {
    res.send('users');
  });

  app.get('/users/:userId', (req, res) => {
    const { userId } = req.params;
    const user = users.find(({ id }) => id === Number(userId));

    if (user) {
      res.send(`Username - ${user.name}`);
    } else {
      res.code(404).send('User not found');
    }
  });

  app.get('/html', (req, res) => {
    res.type('html').send('<h1>Hello World!</h1>');
  });

  app.get('/pug', (req, res) => {
    res.view('src/views/index');
  });
};
