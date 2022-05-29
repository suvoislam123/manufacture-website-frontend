import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../firebase';
import Spinner from '../Spinner/Spinner';
import {ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';

const OrderTableRow = (props) => {
    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [user, loading] = useAuthState(auth);

    const email = user?.email
    const {_id, product_id, quantity, phone, address, name } = props.order
    const { isLoading: productLoading, data: product } = useQuery(['productdata', product_id], () =>
        fetch(`https://guarded-earth-35467.herokuapp.com/readSingleToolsData/${product_id}`).then(res =>
            res.json()
        )
    )


    const showDeleteModal = (id) => {

        setId(id);
        setDeleteMessage(`Are you sure you want to delete this order?`);
        setDisplayConfirmationModal(true);
    };

    // Hide the modal
    const hideConfirmationModal = () => {
        setDisplayConfirmationModal(false);
    };

    // Handle the actual deletion of the item
    const submitDelete = (id) => {

        console.log(id);
        const token = localStorage.getItem('accessToken')
        fetch(`https://guarded-earth-35467.herokuapp.com/deleteOrdersData/${id}`, {
            method: "DELETE",
            headers: {
                accesstoken: `${email} ${token}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                const { acknowledged, deletedCount } = data
                const { error } = data
                if (acknowledged && deletedCount == 1) {
                    toast("Delete SuccessFull!!")
                    props.refetch()
                }
                else if (error) {
                    toast(error)
                }
            })
        setDisplayConfirmationModal(false);
    };


    if (productLoading) {
        return <Spinner></Spinner>
    }
    return (
        <>
           <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <tr>
                <td className="product-thumb">
                    <img width="80px" height="auto" src={product.img} alt="" /></td>
                <td className="product-details">
                    <h3 className="title">{product.name}</h3>
                    <span className="add-id"><strong>Quantity:</strong> {quantity}</span>
                    <span><strong>Phone: </strong>{phone} </span>
                    <span><strong>Price: </strong>${parseInt(product.price) * parseInt(quantity)} </span>
                    <span className="status active"><strong>Status</strong>Active</span>
                    <span className="location"><strong>Location</strong>{address}</span>
                </td>
                <td className="product-category"><span className="categories">{name}</span></td>
                <td className="action" data-title="Action">
                    <div className="">
                        <ul className="list-inline justify-content-center d-flex">
                            <button type="button" className="btn btn-success p-1 me-2">Payment</button>
                            <button type="button"  className="btn btn-danger p-1" onClick={() => showDeleteModal(_id)}>Cancel</button>
                        </ul>
                    </div>
                </td>
            </tr>
            <DeleteConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />

        </>
    );
};

export default OrderTableRow;