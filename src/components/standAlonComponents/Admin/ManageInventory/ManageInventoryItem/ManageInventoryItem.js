import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ManageInventoryItem = ({ product, handleDelete }) => {
    const { image, name, _id, quantity, price, catagory, supplier_name, short_description } = product;
    const navigate = useNavigate();
    
    return (
        <tr className="bg-white border-b">
            <td className="px-2 w-1/12 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {_id}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                <img className='h-20 w-24' src={image} alt="" />
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-pre-wrap w-2">
                {name}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {price} Tk
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {supplier_name}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {catagory}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button onClick={() => navigate(`/admin/updateinventoryitem/${_id}`)} className='bg-orange-400 py-1 px-8 rounded-md text-white'>Update</button>
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap text-center">
                <button onClick={()=>handleDelete(_id)} className='bg-red-600 py-1 px-8 rounded-md text-white'>Delete</button>
            </td>
            
        </tr>
    );
};

export default ManageInventoryItem;