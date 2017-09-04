const request = require("request");
const util = require("util");

const LuisResponse = require("./src/LuisResponse.js");
const Validator = require('./src/Utils/Validator.js')



/**
 *  Creates a Client object to interact with a Microsoft LUIS app
 * 
 * @class LuisClient
 */
class LuisClient {

  
  /**
   * Creates an instance of LuisClient.
   * @param {Object} params
   * Must contain, appId, appKey and region properties
   *  
   * @memberof LuisClient
   */
  constructor(params) {
    Validator.validateInitData(params);
    Validator.validateAppInfoParam(params.appId, "Application Id");
    Validator.validateAppInfoParam(params.appKey, "Subscription Key");
    this.appId = params.appId;
    this.appKey = params.appKey;
    this.url = `${params.region}.api.cognitive.microsoft.com`;
  }


  /**
   * Initiates HTTP request, returning a Promise to be resolved
   * 
   * @param {any} params 
   * @returns {Promise} 
   * @memberof LuisClient
   */
  _luisRequest(params) {
    return new Promise((resolve, reject) => {
      var options = {
        method: 'GET',
        url: `https://${this.url}/luis/v2.0/apps/${this.appId}`,
        qs: {
          'subscription-key': this.appKey,
          staging: Validator.validateBooleanParam(params.verbose, "Staging").toString(),
          verbose: Validator.validateBooleanParam(params.verbose, "Verbose").toString(),
          timezoneOffset: params.timezoneOffset || '0',
          q: params.text || ''
        },
        headers: {
          'cache-control': 'no-cache'
        }
      };

      request(options, function (error, response, body) {
        if (error) reject(error);
        console.log(body);
        resolve(body);
      });
    })
  };

  /**
   * returns a Promise with LUIS result
   * 
   * @param {any} params 
   * @returns {Promise} 
   * @memberof LuisClient
   */
  predict(params) {
    params.text = validateText(params.text);
    return _luisRequest(params);
  }

}

module.exports = LUISClient;