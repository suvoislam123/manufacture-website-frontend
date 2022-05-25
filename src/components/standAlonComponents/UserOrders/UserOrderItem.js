import React from 'react';

const UserOrderItem = ({order}) => {
    const { _id, product_id,order_date, name, image, quantity, total, address } = order;
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
                {order_date}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {quantity}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
                {total}
            </td>
            <td className="text-sm text-gray-900 font-light px-2 w-1/12 py-4 whitespace-nowrap">
               {address }
            </td>
            
        </tr>
    );
};

export default UserOrderItem;