export default (app) => {
  const state = {
    courses: [
      {
        id: 1,
        title: 'JS: Массивы',
        description: 'Курс про массивы в JavaScript',
      },
      {
        id: 2,
        title: 'JS: Функции',
        description: 'Курс про функции в JavaScript',
      },
    ],
  };

  app.get('/courses', (req, res) => {
    const data = {
      courses: state.courses,
      header: 'Курсы по программированию',
    };
    res.view('src/views/courses/index', data);
  });

  app.get('/courses/:id', (req, res) => {
    const { id } = req.params;
    const course = state.courses.find(
      ({ id: courseId }) => courseId === parseInt(id),
    );
    if (!course) {
      res.code(404).send({ message: 'Course not found' });
      return;
    }
    const data = {
      course,
    };
    res.view('src/views/courses/show', data);
  });
};
