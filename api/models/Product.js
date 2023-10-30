const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
    {
        basicDetails: {
            productName: { type: String, required: true },
            description: { type: String },
            category: { type: String, required: true },
            brand: { type: String, required: true },
            price: { type: Number, required: true },
            weight: { type: String, required: true },
            productImg: { type: String, required: true },
            origin: { type: String, required: true }
        },
        tracking: {
            barcode: { type: String, required: true },
            serialNumber: { type: String, required: true },
        },
        vendorDetails: {
            vendorName: { type: String, required: true },
            vendorCode: { type: String, required: true },
            vendorContactInfo: {
                address: { type: String },
                phone: { type: String }
            }
        },
        expiration: {
            manufacturingDate: { type: String, required: true },
            expirationDate: { type: String, required: true }
        },
        compilanceInfo: {
            compilanceCertificate: { type: String, required: true },
            safetyInfo: { type: String, required: true }
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);