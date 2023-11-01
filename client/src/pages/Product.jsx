import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { publicRequest } from '../utils/makeRequest';
import Loading from '../components/Loading';

const Product = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    // fetch single product
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/single/${id}`);
                setProduct(res.data.product);
            } catch (err) {
                console.log('product error: ', err);
            }
        }
        fetchProduct();
    }, [id]);

    return (
        Object.keys(product).length > 0 ? (
            <div className='px-7 pb-7 flex flex-col items-center gap-7'>
                <h1 className='text-center my-4 text-2xl font-bold'>{product?.basicDetails?.productName}</h1>
                <div className='w-3/5 bg-slate-500 text-white p-4 rounded-lg cursor-pointer flex gap-7'>
                    <div className='w-3/5 flex flex-col gap-2'>
                        <h1>Product Name: {product?.basicDetails?.productName}</h1>
                        <p>Description: {product?.basicDetails?.description}</p>
                        <span>Product Category: {product?.basicDetails?.category}</span>
                        <span>Product Brand: {product?.basicDetails?.brand}</span>
                        <span>Product Price: {product?.basicDetails?.price}tk.</span>
                        <span>Weight: {product?.basicDetails?.weight}</span>
                        <span>Origin: {product?.basicDetails?.origin}</span>
                        <span className='capitalize'>Sell Status: {product.sellStatus}</span>
                        <span>Manufacturing Date: {product?.expiration?.manufacturingDate}</span>
                        <span>Expiration Date: {product?.expiration?.expirationDate}</span>
                        <h2>Vendor Name: {product?.vendorDetails?.vendorName}</h2>
                        <span>Vendor Code: {product?.vendorDetails?.vendorCode}</span>
                        <p>Address: {product?.vendorDetails?.vendorContactInfo?.address}</p>
                        <p>Phone: {product?.vendorDetails?.vendorContactInfo?.phone}</p>
                        <h3>ISIN: {product?.tracking?.serialNumber}</h3>
                        <p>Compilance Certificate: {product?.compilanceInfo?.compilanceCertificate}</p>
                        <p>Safety Information: {product?.compilanceInfo?.safetyInfo}</p>
                    </div>
                    <div className='w-2/5 flex flex-col gap-4'>
                        <div className='w-full flex-1'>
                            <img
                                src={product?.basicDetails?.productImg}
                                alt="product image"
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className='w-full'>
                            <img
                                src={`data:image/png;base64,${product.tracking.barcode}`}
                                alt="Barcode"
                                className='w-full aspect-video'
                            />
                        </div>
                    </div>
                </div>
            </div>
        ) : (
            <Loading />
        )
    )
}

export default Product;