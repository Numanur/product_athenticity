import React from 'react'
import Blockchain from '../assets/blockchain.png';

const Home = () => {
    return (
        <div className='my-7 flex flex-col gap-7 items-center'>
            <h1 className='text-2xl font-bold'>
                Welcome To Blockchain World
            </h1>
            <img src={Blockchain} alt="Blockchain" className='w-1/2 aspect-video' />
        </div>
    )
}

export default Home;