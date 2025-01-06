//read data from the source or help to write data
//readable,writable,duplex,transform
const fs = require('fs')
const d = require('zlib')
const crypto = require('crypto')
const {Transform} = require('stream')
class Encrypt extends Transform{
    constructor(key,vector)
    {
        super()
        this.key = key
        this.vector = vector
    }
    __transform(chunk,encoding,callback){
        
    }
}
