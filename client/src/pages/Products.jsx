import React, { useEffect, useState } from 'react'
import { publicRequest } from '../utils/makeRequest';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await publicRequest.get('/products/all');
                console.log('res: ', res);
            } catch (err) {
                console.log('products error: ', err);
            }
        }
        fetchProducts();
    }, []);

    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}

export default Products;