'use strict';

const express = require('express');
const bcrypt = require('bcrypt');

const Model= require('../models/model.js');
const userSchema = require('../models/users-schema.js');

const UserModel = new Model(userSchema);
const router = express.Router();




router.post('/signup-body', async (req, res, next) => {
  let user = await UserModel.create(req.body);

  res.send(user);
});





module.exports = router;