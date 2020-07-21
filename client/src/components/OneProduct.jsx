import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "@reach/router"

const OneProduct = ({ id, deleteHandler }) => {

    const [product, setProduct] = useState({
        title: "",
        price: 0,
        desc: ""
    });
    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then(res => setProduct(res.data.product))
            .catch(err => console.log(err));
        console.log(product);
    });

    return (
        <div>
            <div style={{ textAlign: "left" }}>
                <Link to="/">Back</Link>
            </div>

            <h1>{product.title}</h1>
            <h3>Price: ${product.price / 100}</h3>
            <p>Description: {product.desc}</p>
            <button onClick={(e) => deleteHandler(product._id)} style={{ display: "block", margin: "auto" }}>Delete</button>
        </div>
    )
}
export default OneProduct;