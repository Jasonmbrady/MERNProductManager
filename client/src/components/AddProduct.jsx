import React, { useState } from 'react';
import axios from "axios";

const AddProduct = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [desc, setDesc] = useState("");

    const formHandler = (e) => {
        e.preventDefault();
        let numPrice = parseInt(price) * 100;
        axios.post("http://localhost:8000/api/products", {
            title: title,
            price: numPrice,
            desc: desc
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err.data));
        setTitle("");
        setPrice("");
        setDesc("");
    }
    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const priceHandler = (e) => {
        setPrice(e.target.value);
    }
    const descHandler = (e) => {
        setDesc(e.target.value);
    }

    return (
        <form onSubmit={formHandler}>
            <label>Product Title:</label>
            <input type="text" value={title} onChange={titleHandler} />
            <label>Price:</label>
            <input type="text" value={price} onChange={priceHandler} />
            <label>Product Description</label>
            <input type="text" value={desc} onChange={descHandler} />
            <button>Create Product</button>
        </form>
    )
}
export default AddProduct;