import React, { useEffect, useState } from 'react';
import axios from "axios";

const AllProducts = () => {
    const [products, setProducts] = useState([{
        title: "",
        price: 0,
        desc: ""
    }]);

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
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price / 100}</p>
                            <p>Description: {product.desc}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}
export default AllProducts;