const AnalyzeController = require("./src/AnalyzeController.js");
const DescribeCOntroller = require("./src/DescribeController.js");
const RecognizeController = require("./src/RecognizeController.js");
const OperationController = require("./src/OperationController.js");
const ThumbnailController = require("./src/ThumbnailController.js");
const ModelsController = require('./src/ModelsController.js');
const SpecificController = require('./src/SpecificController.js');
const TagController = require('./src/TagController.js');
const OcrController = require('./src/OcrController.js');

module.exports = [
                    AnalyzeController, 
                    DescribeCOntroller, 
                    RecognizeController, 
                    OperationController, 
                    ThumbnailController,
                    ModelsController,
                    SpecificController,
                    TagController, 
                    OcrController
                  ];
