const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        title: { type: String, required: true, unique: true },
        desc: { type: String, required: true, },
        price: { type: Number, required: true },
        tempId: { type: String, required: true },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);