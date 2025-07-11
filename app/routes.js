// Define your Express routes here
// Check http://expressjs.com/fr/guide/routing.html for documentation

const WelcomeController   = require('./controllers/WelcomeController');
const UserController   = require('./controllers/UserController');

//

module.exports.init = (app) => {
  app.get('/', WelcomeController.index);
  app.get('/users', UserController.index);
  app.get('/user/:id', UserController.getUser);
  app.get('/form', UserController.form);
  app.post('/user/new', UserController.createUser);
  app.post('/users/:id/edit', UserController.editUser);
  app.delete('/users/:id', UserController.delete);
};