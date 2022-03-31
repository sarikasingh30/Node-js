const path=require("path");
const multer=require("multer");

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback( null, path.join(__dirname,"../uploads"));
    },
    filename: function (req, file, callback) {
      const uniquePrefix = Date.now();
      callback(null, uniquePrefix+'-' +file.originalname )
    }
  });
  function fileFilter (req, file, callback) {
    console.log({file})
    // The function should call `callback` with a boolean
    // to indicate if the file should be accepted
    if(file.mimetype=='image/jpeg'||file.mimetype=='image/png'){
        callback(null, true);
    }
    // To reject this file pass `false`, like so:
    else{
        callback(null, false);
    }
    
  
    // To accept the file pass `true`, like so:
    
  
    // You can always pass an error if something goes wrong:
  
  }

  
  const upload = multer({ storage: storage });
const options ={
    storage:storage,
    fileFilter:fileFilter,
    limits:{
        fileSize:1024*1024*5,
    }
};
const uploads=multer(options);
module.exports=uploads;