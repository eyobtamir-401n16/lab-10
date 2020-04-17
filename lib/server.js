'use strict';
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const swaggerGenerator = require('../docs/swagger.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
app.use(morgan('dev'));
swaggerGenerator(app);




const startSever = (port, mongodb) => {
  let options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
  };
  mongoose.connect(mongodb, options);
  app.listen (port, () => {
    console.log('Server is up and running on port', port);
  })
} 



module.exports = {
  server:app,
  start:startSever
}
