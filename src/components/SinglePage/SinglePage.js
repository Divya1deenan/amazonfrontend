import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SinglePage = () => {

    const [data, setData] = useState([]);
    const location = useLocation()
    let query = new URLSearchParams(location.search)
    let productId = query.get('id')
    useEffect(() => {
        console.log(productId, 'productId');
        axios
            .get('http://localhost:4000/products')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    let productDetails = data.filter((ele) => ele.category && ele.product_id == productId);
    productDetails = productDetails[0];
    console.log(productDetails, 'productDetails');
    return (
        <div>
        <div className='single-main'>
            <div className='mobile-img'>
            <img src={productDetails?.img_link} alt={productDetails?.product_name}  />
            </div>
            <div className='mobile-desc'>
            <p>{productDetails?.product_name}</p>
            
            <p>{productDetails?.discounted_price}<strike>{productDetails?.actual_price}</strike></p>
            <p>Rating:{productDetails?.rating}</p>
            </div>
        </div>

        </div>
    )
}

export default SinglePage