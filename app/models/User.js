const Model = require('igo').Model;

const schema = {
  table: 'users',
  columns: [
    'id',
    'name',
    'email',
    'created_at'
  ],
};

module.exports = Model(schema);