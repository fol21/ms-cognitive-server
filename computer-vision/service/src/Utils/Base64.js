const fs = require('fs');
const Readable = require('stream').Readable;

const base64 = require('base-64');
const utf8 = require('utf8');


class Base64{

    encode(data){
        if(typeof data == "string"){
            return base64.encode(utf8.encode(data));
        }
        return base64.encode(data);
    }

    decodeToBytes(data){
        return new Buffer(data,'base64');
    }

    decodeToText(data){
        return base64.decode(data);
    }
    
}

module.exports = new Base64();