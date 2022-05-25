import React, { useEffect, useState } from 'react';
import { Transition } from "@headlessui/react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from './shopicon.svg'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const Header = () => {
    const [profileOpen, setProfileOpen] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [admin, setAdmin] = useState(false);
    const [dashboard, setDashboard] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [user, loading] = useAuthState(auth);
    let photoUrL;
    useEffect(() => {
        if (loading) {

        }

        if (location.pathname.includes('/admin') && user?.email == 'suvoislam753@gmail.com') {
            setAdmin(true);
            console.log(user.email);
        }
        if (user && user?.email == 'suvoislam753@gmail.com') {
            setDashboard(true);
            console.log(user?.photoURL);
            photoUrL = user?.photoURL;

        }
        else {
            setAdmin(false)
        }

    }, [location, user]);
    const logout = () => {
        signOut(auth);
        setProfileOpen(!profileOpen);
        navigate('/login');
        setDashboard(!dashboard);
    }
    return (
        <div>
            <nav className="bg-gradient-to-r from-yellow-900 to-red-400 py-8 text-center">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:bg-cyan-900px-8">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">

                            <button onClick={() => setIsOpen(!isOpen)} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>

                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-8 md:h-12 w-auto" src={logo} alt="Workflow" />
                                <img className="hidden lg:block h-8 md:h-12 w-auto" src={logo} alt="Workflow" /> <h5 className='font-semibold text-white text-lg md:text-4xl ml-2 md:ml-6'>Syndicut<span className='text-red-600'>X</span> Shop</h5>
                            </div>
                            <div className="hidden sm:block sm:ml-6">
                                <div className="flex space-x-4 mt-2 ">
                                    <Link to="/home" className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Home</Link>
                                    <Link to="/orders" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">My Orders</Link>
                                    {admin && <Link to="/admin/orders" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">users Orders</Link>}
                                    {admin && <Link to="admin/manageinventory" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Manage Inventory</Link>}
                                    {admin && <Link to="/admin/addproduct" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Add Prdouct</Link>}

                                    <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
                                    <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
                                </div>
                            </div>
                        </div>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {user ? <button type="button" className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                <span className="sr-only">View notifications</span>

                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </button> : <button className='text-white' onClick={() => navigate('/login')}>Login</button>}


                            <div className="ml-3 relative">
                                <div>
                                    <button type="button" className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                                        <span className="sr-only">Open user menu</span>
                                        {user && <img onClick={() => setProfileOpen(!profileOpen)} className="h-8 w-8 md:h-12 md:w-12 rounded-full" src={photoUrL} alt="" />}
                                    </button>
                                </div>

                                {/* here custom css     */}
                                <div className={` z-10 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  ${profileOpen && 'hidden'}`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1">

                                    <p className="block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-0">Your Profile</p>
                                    <p className="block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-1">Settings</p>
                                    {dashboard && <p onClick={() => { navigate('/admin/manageinventory'); setProfileOpen(!profileOpen); }} className="block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Go to Admin Mode</p>}
                                    <p onClick={() => logout()} className="block cursor-pointer px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-100 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-75 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <div className="sm:hidden" id="mobile-menu">
                        <div className="px-2 pt-2 pb-3 space-y-1">

                            <Link to="/home" className=" text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</Link>

                            <Link to="/orders" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Orders</Link>

                            {admin && <Link to="/admin/manageinventory" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Manage Inventory </Link>}

                            <Link to="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
                            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        </div>
                    </div>
                </Transition>
            </nav>

        </div>
    );
};

export default Header;