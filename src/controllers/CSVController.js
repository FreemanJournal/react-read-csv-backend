const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");
const CSVUploadModel = require("../models/CSVUploadModel");
exports.create = async (req, res) => {
  console.log("files", req.file);
  const data = req.file;
  const allRecords = [];
  try {
    fs.createReadStream(
      path.join(__dirname, "../../", `public/files/${data.filename}`)
    )
      .pipe(csv.parse({ headers: true }))
      .on("error", (err) => console.log({ err }))
      .on("data", (row) => allRecords.push(row))
      .on("end", async (rowCount) => {
        console.log(`${rowCount} rows has parsed.`);
        try {
          const products = await CSVUploadModel.insertMany(allRecords);
          res.send({ success: true, result: {message:"Product created successfully!",products} });
        } catch (error) {
          res.send({ success: false, data: error });
        }
      });
    // res.send({ success: true, result: "Ok" });
  } catch (e) {
    // res.send({ success: false, data: e });
  }
};
