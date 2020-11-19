const express = require('express');
const { config } = require('dotenv');
const router = require('./src/Routes');

config();

const app = express();
app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`running in port ${process.env.PORT}`)
});