const express = require('express');
const multer  = require('multer')
const bodyParser = require('body-parser');

const base64 = require('../Utils/Base64.js');
const msCVApi = require('../Api/MicrosoftComputerVisionApi.js');
const config = require('../../resources/config.json')

const app = express();
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
    fileMiddle(req, res, next) {
        if(req.hasOwnProperty('file') || req.hasOwnProperty('files'))
            res.content = req.file.buffer;
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
    base64Middle(req, res, next) {
        if(req.body.__proto__ != null)
            res.content = base64.decodeToBytes(req.body.base64);
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
            console.log(result)
            res.json(result);
        }).catch((err) => {
            throw err
        });
    }

}

//Returns a singleton when call for require
module.exports = new OcrController();