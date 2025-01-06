const fs= require('fs')
const crypto= require("crypto")
console.log('ddifjsdiofuiosfser')
setTimeout(()=> {
    console.log('fdijfid')
},5000)

crypto.pbkdf2('secret','salt',10000,64,'sha512',(err,key)=>{
    if(err) throw err;
    console.log('8.fjifjodjodjio')
})