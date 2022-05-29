import React from 'react';
import { useQuery } from 'react-query';
import Spinner from '../Spinner/Spinner';

const MyOrderRow = (props) => {
    const { product_id, quantity, phone, address } = props.order
    const { isLoading: productLoading, data: product } = useQuery(['productdata',product_id], () =>
        fetch(`https://arcane-stream-89038.herokuapp.com/readSingleToolsData/${product_id}`).then(res =>
            res.json()
        )
    )
    if (productLoading) {
		return <Spinner></Spinner>
	}
    return (
        <>
            <tr>
                <td className="product-thumb">
                    <img width="80px" height="auto" src={product.img} alt="" /></td>
                <td className="product-details">
                    <h3 className="title">{product.name}</h3>
                    <span className="add-id"><strong>Quantity:</strong> {quantity}</span>
                    <span><strong>Phone: </strong>{phone} </span>
                    <span><strong>Price: </strong>${parseInt(product.price)*parseInt(quantity)} </span>
                    <span className="status active"><strong>Status</strong>Active</span>
                    <span className="location"><strong>Location</strong>{address}</span>
                </td>
                <td className="product-category"><span className="categories">Auto mobile Parts</span></td>
                <td className="action" data-title="Action">
                    <div className="">
                        <ul className="list-inline justify-content-center d-flex">
                            <button type="button" className="btn btn-success p-1 me-2">Payment</button>
                            <button type="button" className="btn btn-danger p-1">Cancel</button>
                        </ul>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default MyOrderRow;