import React from 'react';
import useOrders from '../../../../hooks/useOrders';
import AdminOrdersItem from './AdminOrdersItem/AdminOrdersItem'
const AdminOrders = () => {
    const [orders, setOrders] = useOrders();
    return (
        <div>
            <div className='w-11/12 mx-auto mb-4'>
                <div className="flex flex-col">
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="py-2 inline-block min-w-full sm:px-1 w-1/12 lg:px-8">
                            <div className="overflow-x-auto">
                                <table className="min-w-full">
                                    <thead className="border-b">
                                        <tr>
                                            <th scope="col" className="text-sm  font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Product name
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Photo
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Ordered Date
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Email
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Phone
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Address
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Quantity
                                            </th>
                                            <th scope="col" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-left">
                                                Sub Total
                                            </th>
                                            <th scope="col" colSpan="2" className="text-sm font-bold text-gray-900 px-1 w-1/12 py-4 text-center">
                                                Operation
                                            </th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                      {
                                            orders.map(order => <AdminOrdersItem
                                            key={order._id}    
                                                order={order}
                                                orders={orders}
                                                setOrders={setOrders}
                                               
                                                
                                            ></AdminOrdersItem>) 
                                      }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminOrders;