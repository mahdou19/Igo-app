const User = require('../models/User');

exports.index = async function(req, res) {
  console.log('Create user');

  const users =  await User.list();
  console.log(users);
  res.render('users/index', { users });

};