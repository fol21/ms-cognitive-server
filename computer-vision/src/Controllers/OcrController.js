const express = require('express');
const bodyParser = require('body-parser');

const base64 = require('../Utils/Base64.js.js');
const msCVApi = require('../Api/MicrosoftComputerVisionApi.js');
const config = require('../../resources/config.json')

const app = express();


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
        router.post('/ocr', bodyParser.json(), this.toBase64Middle, this.ocrMiddle, this.sendJson);
        msCVApi.init(config.msComputerVision.key1);
        return router;
    }


    /**
     * Middleware for prossessing income data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    toBase64Middle(req, res, next) {
        res.base64 = base64.decodeToBytes(req.body.base64);
        next(); // pass to next middleware
    }

    /**
     * Middleware for prossessing income data
     * It can be repplicated for more steps
     * @param {any} req 
     * @param {any} res 
     * @param {any} next 
     * 
     * @memberOf Controller
     */
    ocrMiddle(req, res, next) {
        res.ocrPromise = msCVApi.ocr(res.base64);
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
            console.log(result)
            res.json(result);
        }).catch((err) => {
            throw err
        });
    }

}

//Returns a singleton when call for require
module.exports = new OcrController();