import React, { useEffect, useState } from 'react';
import useProducts from '../../../hooks/useProducts';
import './Home.css'
import Product from './Product/Product';
const Home = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <div className='banner-container'>
                <div className='banner-contents'>
                    <div className=''>
                        <img className='block mx-auto' src="https://www.jiomart.com/images/cms/aw_rbslider/slides/1651162869_5D_NMO_Banner.jpg" alt="" />
                    </div>
                    <h1 className='text-2xl md:text-3xl styledfont text-center mt-10 text-cyan-900' >Delivery Your Desired Grocery</h1>
                    <h2 className='text-2xl md:text-2xl text-center styledfont text-cyan-900'>To Your Door</h2>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <div className="input-group relative flex   items-stretch w-full mb-4">
                                <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                                <button className='bg-cyan-900 text-white ml-2 rounded-md px-2'>Search</button>    
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="products-container grid grid-cols-1 md:grid-cols-3 gap-x-9">
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    
                    ></Product>)
                }

            </div>
            
            
        </div>
    );
};

export default Home;