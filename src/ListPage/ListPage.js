import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./ListPage.css"
import { useHistory } from 'react-router-dom';

const ListPage = () => {
    const [data, setData] = useState([]);
    const location = useLocation()
    let query = new URLSearchParams(location.search)
    const history = useHistory();
    let filterId = query.get('id')
    useEffect(() => {
        axios
          .get('http://localhost:4000/products')
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
      }, []);

      let filterData = data.filter(
        (ele) =>
         ele.category &&
          ele.category.includes(
            filterId
          )
      );
      console.log(filterData , 'filterData');
   
      let viewDetails = (product_id)=>{
        history.push('/SinglePage?id='+product_id);
      }

  return (
    <div className='flex flex-wrap'>
   
    {filterData.map((ele) => {
        return (
          <div className='mobiles-product'>
            <img onClick={() => viewDetails(ele.product_id)} src={ele.img_link} alt={ele.product_name} className='mobile-img' />
            <div>
            <p>{ele.product_name.split("|").slice(0, 2).join("|").split(" ").slice(0, 2).join(" ")}</p>
            <p >Rs:{ele.discounted_price} <strike>{ele.actual_price}</strike></p>
            <button className='add-to-cart' >ADD TO CART</button>
            <button className='buy-now' >BUY NOW</button>
              </div>
          </div>
        );
      })}
      </div>)
}

export default ListPage