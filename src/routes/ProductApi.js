const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductsController');



// product routes
router.get("/product/all", productController.SelectProducts)
router.post("/product", productController.CreateMultipleProducts)




module.exports = router;