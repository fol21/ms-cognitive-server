const AnalyzeController = require("./src/AnalyzeController.js");
const DescribeCOntroller = require("./src/DescribeController.js");
const RecognizeController = require("./src/RecognizeController.js");
const OperationController = require("./src/OperationController.js");
const ThumbnailController = require("./src/ThumbnailController.js");
const OcrController = require('./src/OcrController.js');

module.exports = [
                    AnalyzeController, 
                    DescribeCOntroller, 
                    RecognizeController, 
                    OperationController, 
                    ThumbnailController, 
                    OcrController
                  ];
