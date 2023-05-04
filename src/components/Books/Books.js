import React, { useEffect, useState } from 'react'
import "./Books.css"
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const Books = () => {

    const history = useHistory();
    let [data, setData] = useState([])

    useEffect(() => {


        axios.get("http://localhost:4000/products")
            .then(res => setData(res.data))
            .catch(err => console.log(err));

    }, [])

    let books = data.filter(ele => ele.category && ele.category.includes("OfficeProducts"))

    let viewall= ()=>{
        history.push('/ListPage?id=OfficeProducts|OfficePaperProducts|Paper|Stationery|Notebooks,WritingPads&Diaries|CompositionNotebooks|Copy&PrintingPaper|ColouredPaper|Notebooks,WritingPads&Diaries|CompositionNotebooks');
      }

    return (
        <div>
            
            <div className='books-catg'>
            <h2>Best Sellers in Stationaries</h2>
                {books.slice(0, 4).map((ele) => {
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

export default Books