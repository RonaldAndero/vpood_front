import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductList = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        fetchProductList();
    }, []);

    const fetchProductList = async () => {
        try {
            const response = await axios.get('http://localhost:3000/product');
            setProductList(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h1>Product List</h1>
            {productList.map((product) => (
                <div key={product._id}>
                    <h2>{product.Name}</h2>
                    <p>Price: {product.Price}</p>
                    <img src={product.picture_url} height={60} width={60} alt="Product picture" />
                    <p>Active: {product.active ? 'Yes' : 'No'}</p>
                    <p>Stock: {product.stock}</p>
                    <p>Expire date: {product.expire_date}</p>
                    <p>Category FK: {product.category_fk}</p>
                </div>
            ))}
        </div>
    );
};

export default ProductList;