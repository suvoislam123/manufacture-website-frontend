import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Modal from '../Modal/Modal';
import Spinner from '../Spinner/Spinner';
import ProductTableRow from './ProductTableRow';

const ManageProducts = () => {
    const { isLoading, error, data: products,refetch } = useQuery('productsData', () =>
        fetch('http://localhost:5000/readtoolsData').then(res =>
            res.json()
        )
    )



    
    if (isLoading) {
        return <Spinner></Spinner>
    }

    return (
      <>
        <div class="widget dashboard-container my-adslist">
                <h3 class="widget-header text-center">Total Products : {products?.length}</h3>
                <table class="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Information</th>
                            <th class="text-center">Category</th>
                            <th class="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {products.map(product=>{
                         return <ProductTableRow refetch={refetch}  key={product._id} product={product}></ProductTableRow>
                     })}
                    </tbody>
                </table>
            </div>
      </>
    );
};

export default ManageProducts;