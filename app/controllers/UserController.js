
const User = require('../models/User');

exports.index = async function(req, res) {
  const users =  await User.list();
  res.render('users/index', { users });
};

exports.delete = async function(req, res) {
  const { id } = req.params;
  console.log('Suppression de l\'utilisateur avec l\'ID:', id);
  
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
