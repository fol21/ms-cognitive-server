const request = require('request');

/**
 *  Promise Based requests for Microsoft Computer Vision Servers
 * 
 * @class MicrosoftComputerVision
 */
class MicrosoftComputerVision {


  /**
   * options:{
   *     SubscriptionKey: "subscriptionKey",
   *     location: "westus",
   *     language: "en",
   *     detectOrientation: true,
   *     ContentType: ["application/json, application/octet-stream"],
   *     body:[{"url":"http://example.com/images/test.jpg"}, binary_data]
   * }
   * @param {Object} options 
   * @returns {Promise} promise
   * @memberof MicrosoftComputerVisionBusiness
   */
  ocr(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/ocr`,
        qs: {
          language: opt.language,
          detectOrientation: opt.detectOrientation
        },
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: '{"apt":"";\n}'
      };

      //Building request body based in the opt object content
      switch (opt.ContentType) {
        case "application/json":
          options.headers['content-type'] = "application/json";
          options.body = {
            url: opt.body
          };
          options.json = true;
          break;
        case "application/octet-stream":
          options.headers['content-type'] = "application/octet-stream";
          options.body = opt.body;
          //options.encoding = null
          break;
        case "multipart/form-data":
          options.headers['content-type'] = "application/octet-stream";
          options.body = opt.body;
          break;
      }

      //request
      request(options, function (error, response, body) {
        if (error) reject(error);
        console.log(body);
        resolve(body);
      });
    });
  }

}

module.exports = new MicrosoftComputerVision();