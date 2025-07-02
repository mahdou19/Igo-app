const User = require('../models/User');

exports.index = async function(req, res) {
  console.log('Create user');

  await User.create({
    name: 'test',
    email:  'test@mail.com',
  });
  
  const users =  await User.list();
  console.log(users);
  res.render('users/index', { users });

};