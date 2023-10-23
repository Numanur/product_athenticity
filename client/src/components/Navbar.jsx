import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-green-600 text-white px-7 py-4 flex justify-between gap-4'>
            <Link to='/'>
                <span className='text-lg font-bold cursor-pointer'>BlockChain</span>
            </Link>
            <ul className='flex gap-4'>
                <Link to='/'>
                    <li>Home</li>
                </Link>
                <Link to='/products'>
                    <li>Products</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar