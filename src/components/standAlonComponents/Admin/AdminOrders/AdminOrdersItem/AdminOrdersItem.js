import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useProductById from '../../../../../hooks/useProductById';

const AdminOrdersItem = ({ order, orders,setOrders}) => {
    const {_id, image, phone, email, product_id, catagory, address, name, price_per_product, total, quantity, price, order_date
        , supplier_name, short_description } = order;
    const handleDeliver = () => {
        axios.post('http://localhost:5000/updatequantity', order)
            .then(res => {
                const data = res;
                if (data.data.matchedCount ===1) {
                    handleDeleteOrder();
                }
            });
        
        
    }
    const handleDeleteOrder=async(reject) => {
        const message = {
            email: email,
            message: `your order ${_id} has been ${reject?'reject':'sent'}. Stay with SyndiCutX Shop`,
            order_id: _id,
            product_id:product_id
            
        }
        axios.post('http://localhost:5000/messages',message)
            .then(res => {
                const data = res;
                if (data.data.insertedId) {
                    axios.delete(`http://localhost:5000/orders/${_id}`)
                    .then(res => {
                        const data = res;
                        console.log('deleted', data)
                        if (data.data.deletedCount === 1) {
                            const newOrders = orders.filter(order => order._id !== _id);
                            setOrders(newOrders);
                        }
                    })
                }
        })
        console.log(message);
    }
    return (
        <tr className="bg-white border-b">
            <td className="px-2 w-1/12 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                <img className='h-20 w-24' src={image} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-pre-wrap w-2">
                {order_date} 
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {email}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {phone}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {address}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {total}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button onClick={handleDeliver} className='bg-orange-400 py-1 px-8 rounded-md text-white'>Deliver</button>
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button onClick={() => handleDeleteOrder(true)}  className='bg-red-600 py-1 px-8 rounded-md text-white'>Reject Order</button>
            </td>

        </tr>
    );
};

export default AdminOrdersItem;