import React, { useEffect, useState } from 'react'
import "./Electronics.css"
import axios from 'axios'

import { useHistory } from 'react-router-dom'



const Electronics = () => {

    const history = useHistory();
    let [data, setData] = useState([])

    useEffect(() => {


        axios.get("http://localhost:4000/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

    let electronics = data.filter(ele => ele.category && ele.category.includes("Electronics|HomeTheater,TV&Video|Accessories|RemoteControls"))

    let viewall= ()=>{
        history.push('/ListPage?id=Electronics|HomeTheater,TV&Video|Accessories|RemoteControls');
      }
    

    return (
        <div>
           
            <div className='books-catg'>
            <h2>Best Sellers in Electronics|Accessories</h2>
                {electronics.slice(0, 4).map((ele) => {
                    return <div>
                        <img src={ele.img_link} alt={ele.product_name} className='books-img' />
                        <p>{ele.product_name.split("|").slice(0, 1).join("|").split(" ").slice(0, 2).join(" ")}</p>
                    </div>
                })}
                <div className='btn'>
                <button className='books-btn' onClick={viewall}>seemore</button>
            </div>
               
            </div>
            

            </div>
    )
}

export default Electronics