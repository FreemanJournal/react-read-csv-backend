const ProductModel = require("../models/ProductModel");
01723501755
//add many product at once
exports.CreateMultipleProducts = async (req, res) => {
    let data = req.body;
    console.log("Multiple Products", data)
    // ProductModel.insertMany(data, (e, result) => {
    //     console.log('Error :: ', e, " ,Result :: ", result);
    //     if (e) {
    //         res.send({ success: false, result: e });
    //     } else {
    //         res.send({ success: true, result });
    //     }
    // })
}
exports.SelectProducts = async (req, res) => {
    let query = {};
    // let projection = 'name slug discount price specifications colors galleryImg brand warranty details reviews faq homeImg category adminID viewCount';
    ProductModel.find(query, (e, data) => {
        if (e) {
            res.send({ success: false, data: e })
        } else {
            res.send({ success: true, data })

        }
    })

}