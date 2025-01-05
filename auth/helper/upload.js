const multer = require('multer')
const path = require('path')
const storage = multer.diskStorage({
    destination:function(req,file,cb)
    {
        cbt(null,"uploads/");
    },
    filename:function(req,file,cb){
        cb(null,file.filename+"-"+Date.now()+path.extname(file.origin))
    }
})
const checkfilefilter = (req,file,cb)=> {
try {
    if(file.mimetype.startWith('image'))
    {
        cb(null,true)
    }else
    {
    
    }
} catch (error) {
    
}
}
module.exports = multer({
    
})