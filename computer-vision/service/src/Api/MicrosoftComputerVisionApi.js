const microsofComputerVision = require("../Microsoft/MicrosoftComputerVision.js");
const base64 = require('../Utils/Base64.js');

class MicrosoftComputerVisionApi {

    /**
     * Configure API with options
     * 
     * @param {Object} options - mandatory configuration object
     * 
     * options = {
     *  subscriptionKey:
     *  location:
     *  language:
     * } 
     * 
     * @memberOf MicrosoftComputerVisionApi
     */
    configure(subscriptionKey, location) {
        //Mandatory
        this.subscriptionKey = subscriptionKey;
        this.location = location;
    }

    /**
     * Analyze call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    analyse(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location
        };

        if(params.visualFeatures) options.visualFeatures = params.visualFeatures;
        if(params.details) options.details = params.details;
        if(params.language) options.language = params.language;

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.analyse(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * describe call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    describe(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location
        };

        if(params.maxCandidates) options.maxCandidates = params.maxCandidates;

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.describe(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Recognize handwrite call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    recognize(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            handwriting: params.handwriting || true
        };

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.recognize(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Get Handwritten Text Operation
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    operation(id) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            operationId: id
        };
        return microsofComputerVision.operation(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }


     /**
     * generates a thumbnail image call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    thumbnail(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            width: params.width,
            height: params.height
        };

        if(params.smartCropping) options.smartCropping = params.smartCropping;

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.thumbnail(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     *  returns the list of domain-specific models 
     *  that are supported by the Computer Vision API
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    models(id) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location
        };
        return microsofComputerVision.models(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Recognize Domain Specific Content call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    specific(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            model: params.model
        };

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.specific(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Tag Image call
     * 
     * @param {any} data 
     * @param {bool} params 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    tag(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
        };

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.tag(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

    /**
     * Optical character Recoginition call
     * 
     * @param {any} data 
     * @param {bool} [orientation=true] 
     * 
     * data could be a url string, base64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    ocr(data, params) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            language: params.language || "en",
            detectOrientation: params.detectOrientation || false
        };

        if (typeof data == "string") {

            if ((new RegExp("^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{4})$"))
                .test(data)) {
                options.ContentType = 'multipart/form-data';
                options.body = base64.decodeToBytes(data);
            } else {
                options.ContentType = "application/json";
                options.body = data;
            }
        } else {
            options.ContentType = 'multipart/form-data';
            options.body = data;
        }

        return microsofComputerVision.ocr(options).then((result) => {
            return result;
        }).catch((err) => {
            return err;
        });
    }

}

module.exports = new MicrosoftComputerVisionApi();