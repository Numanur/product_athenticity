const Product = require('../models/Product');

const createProduct = async (req, res, next) => {
    const newProduct = new Product(req.body);

    try {
        await newProduct.save();
        res.status(201).json({
            success: true,
            message: "Product created successfully"
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
        await Product.findByIdAndDelete(id);
        res.status(200).json({
            success: true,
            message: "Product has been deleted!"
        });
    } catch (err) {
        next(err);
    }
}

const getSingleProduct = async (req, res, next) => {
    const id = req.params.id;
    try {
        const product = await Product.find({ tempId: id });
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
