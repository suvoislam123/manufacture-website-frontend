import axios from 'axios';
import React, { useState } from 'react';

const AddProduct = () => {
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
    const [catagory, setCatagory] = useState('dried goods');
    const handleAddProduct = (e) => {
        e.preventDefault();
        const product = {
            name: e.target.name.value,
            image: e.target.image.value,
            price: parseInt(e.target.price.value),
            quantity: parseInt(e.target.quantity.value),
            supplier_name: e.target.supplier_name.value,
            catagory: catagory
        }
        axios.post('http://localhost:5000/products', product)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    alert('Product has inserted')
                }
        })
        console.log(product);
    }
    const handleCatagory = e => {
        setCatagory(e.target.value);
        
    }
    console.log(catagory);  
    return (
        <div>
            <form onSubmit={handleAddProduct} className='mb-20'>
                <label className='w-80 block mx-auto mt-5' htmlFor="name">Prduct Name</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="name" placeholder='Enter product name' id="name" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="image">Product Image URL</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="image" placeholder='Enter image url' id="image" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="email">Price in TK</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="price" placeholder='Enter Product price' id="price" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="quantity">Total Quantity</label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="quantity" placeholder='Enter quantity amount' id="quantity" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Supplier Name </label>
                <input className='w-80 block mx-auto border-2 border-cyan-900 py-2 rounded px-6' type="text" name="supplier_name" placeholder='Enter supplier Name' id="cpassword" required />
                <label className='w-80 block mx-auto mt-1' htmlFor="supplier_name">Product Catagrory </label>
                <div className='w-80 block mx-auto'>
                    
                    <select value={catagory} onChange={handleCatagory} >
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
                <input className='w-80 block mx-auto bg-cyan-900 text-gray-50 py-3 rounded-md mt-4' type="submit" value='Add Product' />
            </form>
        </div>
    );
};

export default AddProduct;