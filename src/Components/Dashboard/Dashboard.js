import React from 'react';
import './Dashboard.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase';
import useAdmin from '../Hooks/useAdmin';
import Spinner from '../Spinner/Spinner';
import imageavatar from '../images/user-thumb.jpg'

const Dashboard = () => {
    const [user, loading] = useAuthState(auth)
    const [isAdmin, adminLoading] = useAdmin(user)

    if (loading || adminLoading) {
        return <Spinner></Spinner>
    }

    return (
        <>
            <section className="dashboard section">
                <div className="container">

                    <div className="row">
                        <div className="col-md-10 offset-md-1 col-lg-4 offset-lg-0">

                            <div className="sidebar">
                                <div className="widget user-dashboard-profile">
                                    <div className="profile-thumb">
                                        <img src={imageavatar} alt="" className="rounded-circle" />
                                    </div>
                                    <h5 className="text-center">{user?.email}</h5>
                                    {/* <p>Joined February 06, 2017</p> */}
                                </div>
                                <div className="widget user-dashboard-menu">
                                    <ul className='d-flex flex-column'>

                                        {isAdmin ? <>
                                            <li><NavLink to="manageorders">Manage All Orders</NavLink></li>
                                            <li><NavLink to="addproduct">Add A Product</NavLink></li>
                                            <li><NavLink to="manageusers">Make Admin</NavLink></li>
                                            <li> <NavLink to="manageproducts">Manage Products</NavLink></li>
                                        </> : <>
                                            <li><NavLink to="myorders">My Orders</NavLink></li>
                                            <li> <NavLink to="addreview">Add a Review</NavLink></li>
                                        </>}
                                        <li><NavLink to="manageprofile">My Profile</NavLink></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-0">

                            <Outlet></Outlet>

                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Dashboard;