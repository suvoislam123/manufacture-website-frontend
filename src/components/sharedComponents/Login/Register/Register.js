import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Register = () => {
    const [errorState, setErrorState] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [agree, setAgree] = useState(false);
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const handleRegister = async(e) => {
        e.preventDefault();
        setErrorState(false);
        const fname = e.target.fname.value;
        const lname = e.target.lname.value;
        const fullName = fname + ' ' + lname;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        if (password !== cpassword)
        {
            setErrorState(true)
            setErrorMessage('password did not matched')
            console.log('Asi vai');
            return;
        }
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: fullName });
        console.log('Updated profile');
        
    }
    if (updating || loading) {
        return <Loading />
    }
    if (user) {
        navigate('/home')
        console.log(user.displayName)
    }
    if (error) {
        console.log(error);
    }
    return (
        <div>
            <form onSubmit={handleRegister} className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="email">Your First Name</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="fname" placeholder='Your first name' id="fname" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="email">Your Last Name</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="lname" placeholder='Your last name' id="lname" required/>
                <label className='w-80 block mx-auto mt-1' htmlFor="email">Your Email</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="email" name="email" placeholder='Your Email' id="email" required/>
                <label className='w-80 block mx-auto mt-1' htmlFor="password">Chose a password</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="password" name="password" placeholder='Enter a password' id="password" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="password">Enter password again </label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="password" name="cpassword" placeholder='Enter again your password' id="cpassword" required />
                <p className='w-80 block mt-4  mx-auto text-red-800'>{errorState ? errorMessage : ''}</p>
                <div className='w-80 block mt-4  mx-auto'> 
                    <input type="checkbox" onClick={()=>setAgree(!agree)}/>
                    <label className={`mx-auto ${agree ? '' : 'text-red-800'}`} htmlFor="terms">Accep SyndicutX shop poilices</label>
                </div>
                <input className='w-80 block mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md mt-4' type="submit" value='Register' />
            </form>
        </div>
    );
};

export default Register;