import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "@reach/router";

const AllProducts = ({ products, setProducts, deleteHandler }) => {


    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
            .then(res => setProducts(res.data.products))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            {
                products.map((product, idx) => {
                    return (
                        <div key={idx} style={{ display: "inline-block", margin: "25px" }}>
                            <h3><Link to={`/products/${product._id}`}>{product.title}</Link></h3>
                            <p>Price: ${product.price / 100}</p>
                            <button onClick={(e) => deleteHandler(product._id)} style={{ display: "block", margin: "auto" }}>Delete</button>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default AllProducts;