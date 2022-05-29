import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
import MyOrderRow from './MyOrderRow';

const MyOrders = () => {

    const [user,loading]=useAuthState(auth)
    const token = localStorage.getItem('accessToken')
    const [orders,setOrders]=useState([])

    useEffect(()=>{
        if(user)
        { 
         fetch(`http://localhost:5000/readmyorders?email=${user?.email}`)
		.then(res=>res.json())
		.then(data=>setOrders(data))

        }
      
	},[user])


    return (
        <>
            <div className="widget dashboard-container my-adslist">
                <h3 className="widget-header text-center">My Orders {orders?.length}</h3>
                <table className="table table-responsive product-dashboard-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Product Title</th>
                            <th className="text-center">Category</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                     {orders.map(order=>{
                         return <MyOrderRow key={order._id} order={order}></MyOrderRow>
                     })}
                    </tbody>
                </table>

            </div>

        </>
    );
};

export default MyOrders;