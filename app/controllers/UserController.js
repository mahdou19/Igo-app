
const User = require('../models/User');

exports.index = async function(req, res) {
  const users =  await User.list();
  res.render('users/index', { users });
};

exports.form = async function(req, res) {
  const { id } = req.query;

  let user = null;
  if (id){
    user = await User.find(id);
  }

  res.render('users/form', { user });
};

exports.createUser = async function(req, res) {
  const { name, email } = req.body;
  try {
    await User.create({ name, email });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
 
};

exports.editUser = async function(req, res) {
  const { id } = req.params;
  const { name, email } = req.body;
  if (!id) {
    return res.status(400).send('Id required');
  }

  try {
    const user = await User.find(id);
    user.update({ name, email });
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }

};


exports.delete = async function(req, res) {
  const { id } = req.params;
  
  if (!id) {
    return res.status(400).send('Id required');
  }

  try {
    await User.destroy(id);
    const users = await User.list();
    res.status(200).json({ success: true, users });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
