import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../../api/axiosPrivate';
import auth from '../../../firebase.init';
import UserOrderItem from './UserOrderItem';

const UserOrders = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {

        const getOrders = async () => {
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message);
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login')
                }
            }
        }
        getOrders();

    }, [user]);
    
    return (
        <div>
            {orders.length===0? <p className='text-4xl text-center text-red-700'>You have no orders Yet</p>:
            <div className='w-11/12 mx-auto mb-4'>

                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-1 w-1/12 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                order Id
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Photo
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Product Name
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Ordered Date
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Product Quantity
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Total Amount
                                            </th>
                                            <th scope="col" className="text-sm font-medium text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Receive At
                                            </th>
                                            

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {
                                            products.map(product => <ManageInventoryItem
                                                key={product._id}
                                                product={product}
                                                handleDelete={handleDelete}
                                            >

                                            </ManageInventoryItem>)
                                        } */}
                                        {
                                            orders.map(order => <UserOrderItem
                                                key={order._id}
                                                order={order}
                                            
                                            >    
                                            </UserOrderItem>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    );
};

export default UserOrders;