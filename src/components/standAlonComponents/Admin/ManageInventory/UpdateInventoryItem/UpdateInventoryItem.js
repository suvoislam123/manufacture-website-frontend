import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useProductById from '../../../../../hooks/useProductById';

const UpdateInventoryItem = () => {
    const options = [
        {
            label: "Dried Goods",
            value: "dried goods",
        },
        {
            label: "Fruits and Vegetable",
            value: "fruits and vegitable",
        },
        {
            label: "Meat and Fish",
            value: "meat and fish",
        },
        {
            label: "Drinks",
            value: "drinks",
        },
        {
            label: "Bread and Buscuits",
            value: "bread and Buscuits",
        },
        {
            label: "Baby Item",
            value: "baby item",
        },
        {
            label: "Tools",
            value: "tools",
        },
        {
            label: "Cosmetics",
            value: "cosmetics",
        }
    ];
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useProductById(id);
    const [_id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
    const [supplier_name, setSupplierName] = useState('');
    const [short_description, setShortDesciption] = useState('');
    const [catagory, setCatagory] = useState('')
    useEffect(() => {
        setId(product._id)
        setName(product.name)
        setId(product._id);
        setImage(product.image);
        setPrice(product.price);
        setQuantity(product.quantity);
        setSupplierName(product.supplier_name);
        setShortDesciption(product.short_description);
        setCatagory(product.catagory);

    },[product])
    
    const handleProductUpdate = (e) => {
        e.preventDefault();
        const updatedProduct = {
            name: name,
            image: image,
            price: price,
            quantity: quantity,
            supplier_name: supplier_name,
            short_description: short_description,
            catagory: catagory
        }
        
        axios.post(`http://localhost:5000/updateproduct/${_id}`,updatedProduct)
            .then(res => {
                if (res.data.modifiedCount === 1) {
                    navigate('/')
                }
        })

       
        
    }
    return (
        <div>
            <form onSubmit={handleProductUpdate} className='mb-20'>
                <label className=' hidden w-80 block mx-auto mt-5' htmlFor="product_id">Prduct Id</label>
                <input className='hidden w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="name" onChange={(e)=>setId(e.target.value)} value={_id} readOnly />
                <label className='w-80 block mx-auto mt-5' htmlFor="name">Prduct Name</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name}  placeholder='Enter product name' id="name" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="image">Product Image URL</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="image" onChange={(e)=>setImage(e.target.value)} value={image} placeholder='Enter image url' id="image" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="email">Price in TK</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="price" onChange={(e)=>setPrice(e.target.value)} value={price} placeholder='Enter Product price' id="price" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="quantity">Total Quantity</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="quantity" onChange={(e)=>setQuantity(e.target.value)} value={quantity} placeholder='Enter quantity amount' id="quantity" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Supplier Name </label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="supplier_name" onChange={(e)=>setSupplierName(e.target.value)} value={supplier_name} placeholder='Enter supplier Name' id="cpassword" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Product Short descritpion </label>
                <textarea className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="short_description" onChange={(e) => setShortDesciption(e.target.value)} value={short_description} required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Product Catagory </label>
                <div className='w-80 block mx-auto'>

                    <select value={catagory} onChange={(e)=>setCatagory(e.target.value)} >
                        {
                            options.map(option => <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>)
                        }
                    </select>
                </div>
                <input className='w-80 block mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md mt-4' type="submit" value='Update Product' />
            </form>
        </div>
    );
};

export default UpdateInventoryItem;