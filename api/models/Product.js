const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        price: { type: String, required: true },
        productId: { type: String, required: true, unique: true },
        barcodeImage: { type: String }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);