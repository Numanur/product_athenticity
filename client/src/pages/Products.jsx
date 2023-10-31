import React, { useEffect, useState } from 'react'
import { publicRequest } from '../utils/makeRequest';
import ProductCard from '../components/ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    // fetch all the products
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await publicRequest.get('/products/all');
                setProducts(res.data.products);
            } catch (err) {
                console.log('products error: ', err);
            }
        }
        fetchProducts();
    }, []);

    return (
        products.length > 0 ? (
            <div className='px-7 pb-7'>
                <h1 className='text-center my-6 text-2xl font-bold'>
                    Products Showcase
                </h1>
                <div className='w-full flex flex-wrap gap-4'>
                    {
                        products.length > 0 ? products.map(product => (
                            <ProductCard product={product} />
                        )) : null
                    }
                </div>
            </div>
        ) : (
            <div>
                <span className='w-full h-[85vh] flex justify-center items-center text-2xl font-semibold'>Loading...</span>
            </div>
        )

    )
}

export default Products;