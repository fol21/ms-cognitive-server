const microsofComputerVision = require("../Microsoft/MicrosoftComputerVision.js");
const base64 = require('../Utils/Base64.js');

class MicrosoftComputerVisionApi {

    /**
     * Initialize API
     * 
     * @param {Object} subscriptionKey 
     * 
     * @memberOf MicrosoftComputerVisionApi
     */
    init(options) {
        this.subscriptionKey = options.subscriptionKey;
        this.location = options.location;
        this.language = options.language;
    }

    /**
     * Optical character Recoginition call
     * 
     * @param {any} data 
     * @param {bool} [orientation] 
     * 
     * data could be a url string, bas64 string or bynary data
     * 
     * 
     * @returns {Promise} thenable
     * @memberOf MicrosoftComputerVisionApi
     */
    ocr(data, orientation=true) {

        let options = {
            SubscriptionKey: this.subscriptionKey,
            location: this.location,
            language: this.language,
            detectOrientation: orientation,
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