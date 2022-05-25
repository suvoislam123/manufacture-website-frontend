import React, { useEffect, useRef, useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useToken from '../../../../hooks/useToken';
import Loading from '../../Loading/Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const [loginError, setLoginError] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, sendingerror] = useSendPasswordResetEmail(auth);
    useEffect(() => {
        const exactError = error?.message.slice(22, -2);
        setLoginError(exactError);
        console.log(exactError);
    },[error])
    const navigate = useNavigate();
    const handleLogin = async(e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }
    let from = location.state?.from?.pathname || '/';
    const [token] = useToken(user);
    if (loading || sending) {
        return <Loading></Loading>
    }
    
    if (token) {
        navigate(from ,{replace:true})
    }
    
    if (error || sendingerror) {
       
    }
    return (
        <div>
            <form onSubmit={handleLogin} className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="email">Email</label>
                <input ref={emailRef} className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="email" name="email" placeholder='Your Email'  />
                <label className='w-80 block mx-auto mt-5' htmlFor="password">Password</label>
                <input ref={passwordRef} className='w-80 block mt-1 mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="password" name="password" placeholder='Enter a password' />
                <p className='visible  w-80 block mt-1  mx-auto text-red-800'>{loginError}</p>
                <input className='w-80 block mt-4 mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md mb-0' type="submit" value='Login' />
                <p className='visible  w-80 block mt-1  mx-auto text-red-800'>Forgot Password? <span onClick={async () => {
                    if (emailRef.current.value === '') {
                        alert('please enter a mail first ')
                        return;
                    }
                    await sendPasswordResetEmail(emailRef.current.value);
                    alert('sent password reset email')
                }} className='cursor-pointer text-sky-800'>Reset Password</span></p>
                <Link to='/register'><p className='w-80 block mt-1  mx-auto text-blue-800'>Create A new Account</p></Link>
                <SocialLogin/>
            </form>
            
        </div>
    );
};

export default Login;