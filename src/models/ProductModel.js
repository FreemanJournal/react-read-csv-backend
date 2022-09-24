const mongoose = require('mongoose')


const dataSchema = mongoose.Schema({
    name: { type: String, require: true, unique: false },
    barcode: { type: String, default: null },
    purchase_price: { type: String, default: null },
    selling_price: { type: String, default: null },
    discount_type: { type: String, default: null },
    discount_value: { type: String, default: null },
    category: { type: String, default: null },
    unit: { type: String, default: null },
    brand: { type: String, default: null },
    alert_quantity: { type: String, default: null },
    vat_percent: { type: String, default: null },
    wholesale_price: { type: String, default: null },
    minimum_sale_price: { type: String, default: null },
    minimum_wholesale_price: { type: String, default: null },
    has_variant: { type: String, default: null },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() }

})


const ProductModel = mongoose.model('productList', dataSchema);
module.exports = ProductModel;
