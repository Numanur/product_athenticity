import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='w-full bg-green-600 text-white px-7 py-4 flex justify-center gap-7'>
            <Link to='/'>
                <span className='text-lg cursor-pointer'>BlockChain</span>
            </Link>
            <Link to='/products'>
                <span className='text-lg cursor-pointer'>Products</span>
            </Link>
        </div>
    )
}

export default Navbar;