import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicRequest } from '../utils/makeRequest';

const Product = () => {
    const { id: productId } = useParams();
    const [product, setProduct] = useState({});

    // fetch single product
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/single/${productId}`);
                setProduct(res.data.product);
            } catch (err) {
                console.log('product error: ', err);
            }
        }
        fetchProduct();
    }, []);

    return (
        <div className='px-7 pb-7 flex flex-col items-center gap-7'>
            <h1 className='text-center my-4 text-2xl font-bold'>{product.title} Product Details</h1>
            <div
                className='w-2/5 bg-slate-500 text-white p-4 rounded-lg cursor-pointer flex flex-col gap-7'
            >
                <div className='flex flex-col gap-2'>
                    <h2>Product Name: {product.title}</h2>
                    <span>ProductPrice: {product.price}</span>
                    <p>Description: {product.desc}</p>
                </div>
                <img
                    src={`data:image/png;base64,${product.barcodeImage}`}
                    alt="Barcode"
                    className='w-full aspect-[16/7]'
                />
            </div>
        </div>
    )
}

export default Product;