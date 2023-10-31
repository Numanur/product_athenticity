import React, { Suspense, lazy, useEffect, useState } from 'react'
import { publicRequest } from '../utils/makeRequest';
// const ProductCard = lazy(() => import('../components/ProductCard'));
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';

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
                        <ProductCard product={product} />
                    )) : (
                        <Loading />
                    )
                }
            </div>
        </div>
    )
}

export default Products;