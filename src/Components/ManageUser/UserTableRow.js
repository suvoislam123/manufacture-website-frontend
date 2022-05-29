import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation';
import ActionConfirmation from '../ActionConfirmation/ActionConfirmation';
const UserTableRow = ({ user: userData,refetch }) => {


    const [id, setId] = useState(null);
    const [displayConfirmationModal, setDisplayConfirmationModal] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState(null);
    const [user, loading] = useAuthState(auth);
    const email = user?.email

    const showDeleteModal = (id) => {

        setId(id);
        setDeleteMessage(`Are you sure you want to Make this user Admin?`);
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
        fetch(`http://localhost:5000/makeadmin/${id}`, {
            method: "PUT",
            headers: {
                accesstoken: `${email} ${token}`
            }
        })
            .then(res => res.json())
            .then((data) => {
                const { acknowledged, modifiedCount } = data
                const { error } = data
                if (acknowledged && modifiedCount == 1) {
                    toast("Action successfull")
                    refetch()
                }
                else if (error) {
                    toast(error)
                }
            })
        setDisplayConfirmationModal(false);
    };

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
                <td>
                    {userData.name}
                </td>
                <td>
                    {
                        userData.email
                    }

                </td>
                <td className="action" data-title="Action">
                    <div className="">
                        <ul className="list-inline justify-content-center d-flex">
                            <button onClick={() => showDeleteModal(userData._id)} type="button" disabled={userData?.role === 'admin'} className="btn btn-success p-1 me-2">{userData?.role === 'admin' ? 'Admin' : 'Make Admin'}</button>
                        </ul>
                    </div>
                </td>
            </tr>
            <ActionConfirmation showModal={displayConfirmationModal} confirmModal={submitDelete} hideModal={hideConfirmationModal} id={id} message={deleteMessage} />

        </>
    );
};

export default UserTableRow;