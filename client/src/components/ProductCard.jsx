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
            onClick={() => handleNavigate(product.tracking.serialNumber)}
        >
            <img
                src={product.basicDetails.productImg}
                alt="product imgage"
                className='w-full aspect-video'
            />
            <div className='flex flex-col gap-2'>
                <h1>Product Name: {product.basicDetails.productName}</h1>
                <p>Description: {product.basicDetails.description}</p>
                <span>Brand: {product.basicDetails.brand}</span>
                <span>Price: {product.basicDetails.price}tk.</span>
                <span>Weight: {product.basicDetails.weight}</span>
                <span>Origin: {product.basicDetails.origin}</span>
                <span className='capitalize'>Sell Status: {product.sellStatus}</span>
                <span>Manufacturing Date: {product.expiration.manufacturingDate}</span>
                <span>Expiration Date: {product.expiration.expirationDate}</span>
            </div>
        </div>
    )
}

export default ProductCard