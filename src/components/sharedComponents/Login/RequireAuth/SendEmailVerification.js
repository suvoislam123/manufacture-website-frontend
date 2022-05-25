import React from 'react';
import { useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const SendEmailVerification = () => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
    return (
        <div>
            <h1 className='text-2xl text-center text-red-800 mt-32'>Please Veify Your Mail</h1>
            <button onClick={async () => {
                await sendEmailVerification();
                alert('Sent email');
            }} className='bg-cyan-800 text-white py-2 px-16 rounded-lg block mx-auto mt-10 mb-32'>Send Email Verifation</button>
        </div>
    );
};

export default SendEmailVerification;