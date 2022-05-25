import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductById from '../../../../hooks/useProductById';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';
const ConfirmOrder = () => {
    const [user, loading, error] = useAuthState(auth);
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useProductById(id);
    const { image, name, supplier_name, price, quantity, _id, catagory, short_description } = product;
    const [totalExpens, setTotalExpense] = useState(0);
    const [selectedQuantity, setSeletedQuantity] = useState(1);
    const [deleveryCharge, setDelveryCharge] = useState(20);
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState(user?.email);
    const [address, setAddress] = useState('');
    console.log(quantity)
    const arr = [...Array(quantity).keys()];
    arr.shift();
    arr.push(quantity);
    useEffect(() => {
        setTotalExpense(price * (selectedQuantity));
    }, [price, selectedQuantity]);
    useEffect(() => {
        if (totalExpens < 1000) {
            setDelveryCharge(30)
        }
        if (totalExpens > 1000) {
            setDelveryCharge(55)
        }
    }, [totalExpens]);
    const order = {
        product_id: _id,
        order_date: new Date().toLocaleString([], { hour12: true }),
        name: name,
        image: image,
        supplier_name: supplier_name,
        quantity:parseInt(selectedQuantity),
        price_per_product: parseInt(price),
        total: totalExpens + deleveryCharge,
        phone: phone,
        email: email,
        address:address,
        catagory: catagory,
        short_description: short_description   
    }
    const handleChangeOption=(e) => {
        setSeletedQuantity(e.target.value);
    }
    const handlePlaceOrder = () => {
        if (order.address == '' || order.email== '' || order.phone=='' ) {
            alert('please fill all the field')
            return;
        }
        const proceed = window.confirm('Are You agree to place the order?');
        if (proceed) {
            console.log(order);
            axios.post('http://localhost:5000/orders', order)
                .then(res => {
                    const { data } = res;
                    if (data.insertedId) {
                        alert('Your order is placed');
                        navigate('/')
                    }
                });
        }
        
    }
    
    return (
        <div className='w-80 md:w-5/12 shadow-xl mt-12 mx-auto p-12'>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <img className='h-40' src={image} alt="" />
                    <h5>{name}</h5>
                    <h5 className='font-semibold'>Price:{price} Tk</h5>
                    <p>Choose quantity</p>
                    <select onChange={handleChangeOption} name="quantity" id="quantity">
                        {
                            arr.map(number => <option key={number} value={number}>{number}</option>)
                        }
                    </select>

                </div>
                <form action="" id='order_form'>
                    <label className='block' htmlFor="Phone Number"> Your Phone Number</label>
                    <input onChange={(e)=>setPhone(e.target.value)}  className=' block border-2 border-cyan-900 px-2 py-1 rounded-sm' type="tel" name="phone" placeholder="123-45-678"  required></input>
                    <label className='block' htmlFor="Email"> Your Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} value={email} className=' block border-2 border-cyan-900 px-2 py-1 rounded-sm' type="email" name="phone" placeholder="example@gmail.com" required readOnly></input>
                    <label className='block' htmlFor="Address"> Your Address</label>
                    <input onChange={(e)=>setAddress(e.target.value)}  className=' block border-2 border-cyan-900 px-2 py-1 rounded-sm' type="text" name="address" placeholder="Your address" required ></input>
                    <p className='mt-2'>Delevery Charge: {deleveryCharge} Tk </p>
                    <p>Total Charge: {totalExpens + deleveryCharge} TK</p>
                </form>

            </div>
            <button  onClick={handlePlaceOrder} className='w-40 block mt-5 mx-auto bg-cyan-900 text-gray-50 py-1 rounded-md'>Place Order</button>
        </div>
    );
};

export default ConfirmOrder;