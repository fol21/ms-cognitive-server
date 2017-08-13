const request = require('request');

/**
 *  Promise Based requests for Microsoft Computer Vision Servers
 * 
 * @class MicrosoftComputerVision
 */
class MicrosoftComputerVision {


  /**
   *
   * 
   * This operation extracts a rich set of visual features based on the image content.
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  analyse(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/analyze`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
      };
      if (opt.visualFeatures) options.qs.visualFeatures = opt.visualFeatures;
      if (opt.details) options.qs.details = opt.details;
      if (opt.language) options.qs.language = opt.language;

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
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * This operation generates a description of an image in human readable language with complete sentences. 
   * The description is based on a collection of content tags, which are also returned by the operation. 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  describe(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/describe`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
      };
      
      if(opt.maxCandidates) options.qs.maxCandidates = params.maxCandidates;

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
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * Use this interface to get the result of a Recognize Handwritten Text operation. When you use the Recognize Handwritten Text interface
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  recognize(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/recognizeText`,
        qs: {
          handwriting: opt.handwriting
        },
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
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
      }



      //request
      request(options, function (error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * This interface is used for getting handwritten text operation result.
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  operation(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'GET',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/${opt.operationId}`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
        },
      };
      //request
      request(options, function (error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * This operation generates a thumbnail image with the user-specified width and height.
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  thumbnail(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/generateThumbnail`,
        qs: {
          width: opt.width,
          height: opt.height,
        },
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
      };

      if(opt.smartCropping) options.smartCropping = opt.smartCropping;

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
      }



      //request
      request(options, function (error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * This operation returns the list of domain-specific models that are supported by the Computer Vision API. 
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  models(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'GET',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/models`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
        },
      };
      //request
      request(options, function (error, response, body) {
        if (error) reject(error);
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * This operation recognizes content within an image by applying a domain-specific model.
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  specific(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/models/${opt.model}/analyze`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
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
        resolve(body);
      });
    });
  }

  /**
   *
   * this operation generates a list of words, or tags, 
   * that are relevant to the content of the supplied image.
   * 
   * @param {Object} options - see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
   */
  tag(opt) {
    return new Promise((resolve, reject) => {
      let options = {
        method: 'POST',
        url: `https://${opt.location}.api.cognitive.microsoft.com/vision/v1.0/tag`,
        headers: {
          'Ocp-Apim-Subscription-Key': opt.SubscriptionKey,
          'content-type': ""
        },
        body: ""
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
        resolve(body);
      });
    });
  }

  /**
   *
   * 
   * Optical Character Recognition (OCR) detects text in an image and extracts the recognized characters into a machine-usable character stream.
   * 
   * @param {Object} options => see params in 
   * https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   *  
   * @returns {Promise} promise
   * OCR results in the hierarchy of region/line/word. The results include text, bounding box for regions, lines and words.
   * Object properties => https://westus.dev.cognitive.microsoft.com/docs/services/56f91f2d778daf23d8ec6739/operations/56f91f2e778daf14a499e1fc
   * 
   * @memberof MicrosoftComputerVision
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
        body: ""
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
        resolve(body);
      });
    });
  }

}

module.exports = new MicrosoftComputerVision();