# microsoft-computer-vision-service
Microsoft Computer Vision Service for quick access API

https://www.npmjs.com/package/module

# npm install

```javascript
npm install --save microsoft-computer-vision-service
```

# Description
This module provides a server object for calling an API with all ther services in computer-vision

# Usage

```javascript
const service = require('microsoft-computer-vision-service');
const controllers = require('microsoft-computer-vision-service/src/Controllers');

service.initControllers(controllers);
console.log("Added Computer Vision Controllers");

service.listen(3000);

````