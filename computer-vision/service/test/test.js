const service = require('../src/Service');
const controllers = require('../src/Controllers');
const config = require("../resources/config.json")

service.initControllers(controllers);
console.log("Added Computer Vision Controllers");

service.listen(config.server.port);