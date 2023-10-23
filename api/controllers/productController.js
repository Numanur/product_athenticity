const Product = require('../models/Product');
const JsBarcode = require('jsbarcode');
const { createCanvas } = require("canvas");

const createProduct = async (req, res, next) => {

    try {
        const canvas = createCanvas();

        JsBarcode(canvas, req.body.productId, {
            format: 'CODE128',
            displayValue: true,
            fontSize: 16,
        });

        const barcodeImageBuffer = canvas.toBuffer();

        const newProductObj = {
            ...req.body,
            barcodeImage: barcodeImageBuffer.toString('base64')
        }

        const newProduct = new Product(newProductObj);
        const product = await newProduct.save();

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            product
        });
    } catch (err) {
        next(err);
    }
}

const updateProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Product.findByIdAndUpdate(
            id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json({
            success: true,
            message: "Product updated successfully"
        });
    } catch (err) {
        next(err);
    }
}

const deleteProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Product.deleteOne({ productId: id });
        res.status(200).json({
            success: true,
            message: "Product has been deleted!"
        });
    } catch (err) {
        next(err);
    }
}

const getSingleProduct = async (req, res, next) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ productId: id });

        res.status(200).json({
            success: true,
            product
        });
    } catch (err) {
        next(err);
    }
}

const getAllProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const products = await Product.find({});
        res.status(200).json({
            success: true,
            products
        });
    } catch (err) {
        next(err);
    }
}


module.exports = {
    createProduct,
    deleteProduct,
    updateProduct,
    getAllProduct,
    getSingleProduct
}
