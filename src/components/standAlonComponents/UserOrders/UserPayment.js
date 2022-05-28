import React from 'react';
import { useParams } from 'react-router-dom';

const UserPayment = () => {
    const {id} = useParams()  
    return (
        <div>
            <h1>This is user Pyament {id} </h1>
        </div>
    );
};

export default UserPayment;