const base64 = require('base-64');
const utf8 = require('utf8');


class Base64Business{

    encode(data){
        if(typeof data == "string"){
            return base64.encode(utf8.encode(data));
        }
        return base64.encode(data);
    }

    decodeToBytes(data){
        return base64.decode(data);
    }

    decodeToText(data){
        return utf8.decode(base64.decode(data));
    }
    
}

module.exports = new Base64Business();