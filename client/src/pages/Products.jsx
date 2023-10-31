import React, { Suspense, lazy, useEffect, useState } from 'react'
import { publicRequest } from '../utils/makeRequest';
const ProductCard = lazy(() => import('../components/ProductCard'));

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
        <div className='px-7 pb-7'>
            <h1 className='text-center my-6 text-2xl font-bold'>
                Products Showcase
            </h1>
            <div className='w-full flex flex-wrap gap-4'>
                {
                    products.length > 0 ? products.map(product => (
                        <Suspense fallback={<div className='w-full h-[85vh] flex justify-center items-center text-2xl font-semibold'>Loading...</div>}>
                            <ProductCard product={product} />
                        </Suspense>
                    )) : null
                }
            </div>
        </div>
    )
}

export default Products;