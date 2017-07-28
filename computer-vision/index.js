const express = require('express');

const config =  require("./resources/config.json")

const app = express();
const OcrController = require('./src/Controllers/OcrController');



  app.use('/computer-vision', OcrController.init(express.Router()));
  app.listen(config.server.port, function () {
    console.log('Listening to port ' + config.server.port.toString());
  });