import React from 'react'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

    // navigate to single product page
    const handleNavigate = (id) => {
        navigate(`/products/${id}`);
    }

    return (
        <div
            className='w-[32%] bg-slate-500 text-white p-4 rounded-lg cursor-pointer flex flex-col gap-7'
            key={product._id}
            onClick={() => handleNavigate(product.productId)}
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
    )
}

export default ProductCard