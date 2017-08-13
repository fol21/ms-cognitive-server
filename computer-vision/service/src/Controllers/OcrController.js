const multer  = require('multer')
const bodyParser = require('body-parser');

const msCVApi = require('../Api/MicrosoftComputerVisionApi.js');
const config = require('../../resources/config.json')

const upload = multer();


/**
 * Controller Associated to a RESTfull method
 * 
 * @class Controller
 */
class OcrController {

    /**
     * Begin Application 
     * 
     * @param {any} router 
     * @returns 
     * 
     * @memberOf Controller
     */
    init(router) {
        router.post('/ocr',upload.single('file'),bodyParser.json(),this.fileMiddle, this.base64Middle, this.ocrMiddle, this.sendJson);
        msCVApi.configure({
            subscriptionKey:config.msComputerVision.key1,
            location:config.msComputerVision.location,
            language:config.msComputerVision.language
        });
        return router;
    }



     /**
     * Process image bynary data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    fileMiddle(req, res, next) {
        req.hasFile = false;
        if(req.hasOwnProperty('file') || req.hasOwnProperty('files')){
            req.hasFile = true;
            res.content = req.file.buffer;
        }
        next(); // pass to next middleware
    }


    /**
     * Process incoming base64 string
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    base64Middle(req, res, next) {
        if(!(req.hasFile))
            res.content = req.body.base64;
        next(); // pass to next middleware
    }

    /**
     * OCR processing of content data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    ocrMiddle(req, res, next) {
        res.ocrPromise = msCVApi.ocr(res.content);
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
        res.ocrPromise.then((result) => {
            res.json(JSON.parse(result));
        }).catch((err) => {
            console.log(err)
        });
    }

}

//Returns a singleton when call for require
module.exports = new OcrController();