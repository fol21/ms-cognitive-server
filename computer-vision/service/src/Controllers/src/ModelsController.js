const multer  = require('multer')
const bodyParser = require('body-parser');

const msCVApi = require('../../Api/MicrosoftComputerVisionApi.js');
const config = require('../../../resources/config.json')

const upload = multer();


/**
 * Controller Associated to a RESTfull method
 * 
 * @class Controller
 */
class ModelsController {

    /**
     * Begin Application 
     * 
     * @param {any} router 
     * @returns 
     * 
     * @memberOf Controller
     */
    init(router) {
        router.get('/models',upload.single('file'), this.analyzeMiddle, this.sendJson);
        msCVApi.configure(config.msComputerVision.key1,config.msComputerVision.location);
        return router;
    }

    /**
     * Analyze processing of content data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    analyzeMiddle(req, res, next) {
        res.analyzePromise = msCVApi.models();
        next(); // pass to next middleware
    }


    /**
     * Callback to send the response
     * 
     * @param {any} req 
     * @param {any} res 
     * 
     * @memberOf Controller
     */
    sendJson(req, res) {
        res.analyzePromise.then((result) => {
            res.json(JSON.parse(result));
        }).catch((err) => {
            console.log(err)
        });
    }

}

//Returns a singleton when call for require
module.exports = new ModelsController();