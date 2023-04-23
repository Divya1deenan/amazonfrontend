import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
const Mobile = () => {

    const [data, setData] = useState([])
    const history = useHistory()
    useEffect(() => {

        axios.get("http://localhost:4000/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

   
    return (
        <>
        
    {data.map((ele)=>{

        return <div>

            {/* <p>{ele.product_name}</p> */}
            <p>{ele.product_name}</p>
        </div>
    })}


        </>
    )
}

export default Mobile