import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useProducts from '../../../../hooks/useProducts';
import ManageInventoryItem from './ManageInventoryItem/ManageInventoryItem';
const ManageInventory = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure to delete the item');
        if (proceed) {
            console.log('Item deleted ', id);
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remaining = products.filter(product => product._id !== id);
                setProducts(remaining);
            })
            
            console.log('deleted');
        }
    }
    return (
        <>
            <h1 className='text-xl text-center mt-6'>Search Products Here</h1>
            <div className="flex justify-center mt-6">
                <div className="mb-3 xl:w-96">
                    <div className="input-group relative flex   items-stretch w-full mb-4">
                        <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button className='bg-cyan-900 text-white ml-2 rounded-md px-2'>Search</button>
                    </div>
                </div>
            </div>

            <div className='w-11/12 mx-auto mb-4'>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-1 w-1/12 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Serial
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Photo
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Price
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                SuplierName
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Catagory
                                            </th>
                                            <th scope="col" colSpan="2" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-center">
                                                Operation
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map(product => <ManageInventoryItem
                                                key={product._id}
                                                product={product}
                                                handleDelete={handleDelete}
                                            >

                                            </ManageInventoryItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default ManageInventory;