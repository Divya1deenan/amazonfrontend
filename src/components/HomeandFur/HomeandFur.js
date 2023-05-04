import React, { useEffect, useState } from 'react'
// import "./HomeandFur.css"
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const HomeandFur = () => {

    const history = useHistory();
    let [data, setData] = useState([])

    useEffect(() => {


        axios.get("http://localhost:4000/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

    let homeandFur = data.filter(ele => ele.category && ele.category.includes("Computers&Accessories|Accessories&Peripherals|Cables&Accessories|Cables|USBCables"))


    let viewall= ()=>{
        history.push('/ListPage?id=Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones');
      }
    return (
        <div>
            
            <div className='books-catg'>
            <h2>Best Sellers in Computers|Accessories</h2>
                {homeandFur.slice(0, 4).map((ele) => {
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

export default HomeandFur