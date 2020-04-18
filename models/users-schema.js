'use strict';

const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const schema = mongoose.Schema ({
  username: {type: 'String', unique:true , require: true},
  password:{type: 'String', require: true},
  fname:{type: 'String'},
  lname:{type: 'String'}
});



module.exports = mongoose.model('users', schema);