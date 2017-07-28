const microsofComputerVision = require("microsoft-computer-vision");

class MicrosoftComputerVisionApi {

    /**
     * Initialize API
     * 
     * @param {string} subscriptionKey 
     * 
     * @memberOf MicrosoftComputerVisionApi
     */
    init(subscriptionKey) {
        this.subscriptionKey = subscriptionKey;
    }

    /**
     * Image Analysis
     * 
     * {
     *   "categories": [
     *       {
     *       "name": "outdoor_water",
     *       "score": 0.9921875
     *       }
     *   ],
     *   "description": {
     *       "tags": [
     *       "nature",
     *       "water",
     *       "waterfall",
     *       "outdoor",
     *       "rock",
     *       "mountain",
     *       "rocky",
     *       "grass",
     *       "hill",
     *       "top",
     *       "field"
     *       ],
     *       "captions": [
     *       {
     *           "text": "a large waterfall over a rocky cliff",
     *           "confidence": 0.9165146827843689
     *       }
     *       ]
     *   },
     *   "requestId": "63d3c630-7f3d-43d7-8a97-143012fc53f4",
     *   "metadata": {
     *       "width": 1280,
     *       "height": 959,
     *       "format": "Jpeg"
     *   },
     *   "color": {
     *       "dominantColorForeground": "Grey",
     *       "dominantColorBackground": "Green",
     *       "dominantColors": [
     *       "Grey",
     *       "Green"
     *       ],
     *       "accentColor": "4D5E2F",
     *       "isBWImg": false
     *   }
     *  }                         
     * 
     * @param {any} data 
     * 
     * @memberOf MicrosoftComputerVisionApi
     */
    analyze(data) {
        microsofComputerVision.analyzeImage({
            "Ocp-Apim-Subscription-Key": this.subscriptionKey,
            "request-origin": "westus",
            "language": "en",
            "detect-orientation": true,
            "content-type": "application/octet-stream",
            "body": data
        }).then((result) => {
            console.log(JSON.stringify(result));
        }).catch((err) => {
            throw err;
        })
    }


    /**
     * Optical character Recoginition call
     * 
     *   // { 
     *       "language": "en", 
     *        "orientation": "Up", 
     *       "regions": [ 
     *           { 
     *               "boundingBox": "7,55,605,387", 
     *               "lines": [ 
     *                  { 
     *                       "boundingBox": "7,55,603,65", 
     *                      "words": [ 
     *                           { 
     *                               "boundingBox": "7,59,291,61", 
     *                               "text": "HOME:" 
     *                           }, 
     *                           { 
     *                               "boundingBox": "326,55,284,65", 
     *                                                    } 
     *                       ] 
     *                   }, 
     *                   ... 
     *               ] 
     *          } 
     *       ] 
     *   } 
     * 
     * @param {any} data 
     * 
     * @memberOf MicrosoftComputerVisionApi
     */
    ocr(data) {
        microsofComputerVision.orcImage({
            "Ocp-Apim-Subscription-Key": this.subscriptionKey,
            "request-origin": "westus",
            "language": "en",
            "detect-orientation": true,
            "content-type": "application/octet-stream",
            "body": data
        }).then((result) => {
            console.log(JSON.stringify(result));
        }).catch((err) => {
            throw err;
        })
    }

}

module.exports = new MicrosoftComputerVisionApi();