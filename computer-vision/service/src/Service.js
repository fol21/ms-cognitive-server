const express = require('express');

const app = express();

class Service{

  initControllers(controllers){
    controllers.forEach((controller) => {
        app.use('/computer-vision', controller.init(express.Router()));
    })
  }

  listen(port){
    app.listen(port, function () {
    console.log('Listening to port ' + port.toString());
});
  }

}

module.exports = new Service();