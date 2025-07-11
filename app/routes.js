// Define your Express routes here
// Check http://expressjs.com/fr/guide/routing.html for documentation

const WelcomeController   = require('./controllers/WelcomeController');
const UserController   = require('./controllers/UserController');

//

module.exports.init = (app) => {
  app.get('/', WelcomeController.index);
  app.get('/users', UserController.index);
  app.delete('/users/:id', UserController.delete);
};