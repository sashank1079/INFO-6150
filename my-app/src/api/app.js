const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const router = require('./router');

const app = express();

// Use cors middleware
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Use router middleware
app.use('/api', router);

module.exports = app;
