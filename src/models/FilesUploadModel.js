const mongoose = require('mongoose')

const dataSchema = new mongoose.Schema({
    name:String,
    files:{type:Array,require:true}

},{timestamps:true})


const FilesUploadModel = mongoose.model('uploadFiles', dataSchema);
module.exports = FilesUploadModel;
