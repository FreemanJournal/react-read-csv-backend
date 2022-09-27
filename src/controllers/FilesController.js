const FilesUploadModel = require("../models/FilesUploadModel")

exports.importCSVFiles = async (req, res) => {
  const files = []
  try {
    if(Array.isArray(req.files.csvFile) && req.files.csvFile.length > 0){
      let data = req.files.csvFile; 
      // let data = req.file; //for single file
      // console.log("csv files", data);
      // files.push(data.path) //for single file
      for(let file of data){
        console.log({file})
        files.push(file.path)
      }
    }
   
    FilesUploadModel.create({
      // name:data.originalname, //for single file
      files
    })
    res.send({ success: true, result: "Ok" });
  } catch (error) {}
};

// if (e) {
//   res.send({ success: false, data: e });
// } else {
//   res.send({ success: true, data });
// }
