const express = require('express');
const router = express.Router();
const FilesController = require('../controllers/FilesController');
const CSVController = require("../controllers/CSVController");
const multer = require("multer");
const fs = require("fs")
const path = require("path")

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        if(!fs.existsSync('public')){
            fs.mkdirSync("public");
        }
        if(!fs.existsSync("public/files")){
            fs.mkdirSync("public/files");
        }
        cb(null,'public/files')
    },
    filename:function(req,file,cb){
        cb(null,Date.now() + file.originalname);
    }
});
const upload = multer({
    storage:storage,
    fileFilter:function(req,file,cb){
        const extension = path.extname(file.originalname);
        if(extension !== '.csv'){
            return cb(new Error("Only csv files are allowed."))
        }
        cb(null,true);
    }
})


// product routes
// router.post("/csv/upload",upload.fields([{name:"csvFile",maxCount:5}]), FilesController.importCSVFiles);//for multiple files
// router.post("/csv/upload",upload.single('csvFile'), FilesController.importCSVFiles); //for single file

router.post("/uploadCsv/create",upload.single("csvFile"),CSVController.create);






module.exports = router;