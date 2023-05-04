import React, { useState, useEffect } from 'react';
import "./mobile.css"
import axios from 'axios';
import image0 from "../image/mobile.JPG"
import { useHistory } from 'react-router-dom';

const Mobile = () => {
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(5);
  const history = useHistory();

  useEffect(() => {
    axios
      .get('http://localhost:4000/products')
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 5);
      setEndIndex(endIndex - 5);
    }
  };

  const handleNext = () => {
    if (endIndex < data.length) {
      setStartIndex(startIndex + 5);
      setEndIndex(endIndex + 5);
    }
  };

  let mobile = data.filter(
    (ele) =>
      ele.category &&
      ele.category.includes(
        'Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones'
      )
  );

  let viewall= ()=>{
    history.push('/ListPage?id=Electronics|Mobiles&Accessories|Smartphones&BasicMobiles|Smartphones');
  }

  return (

    <div className='flex'>
    <div className='main-div'>
      <div className='carousel'>
        {mobile.slice(startIndex, endIndex).map((ele) => {
          return (
            <div className='mobiles-product'>
              <img src={ele.img_link} alt={ele.product_name} />
              <p>{ele.product_name.split("|").slice(0, 2).join("|").split(" ").slice(0, 2).join(" ")}</p>

            </div>
          );
        })}
        <div className='button-group'>
        <button
          className='prev-button'
          onClick={handlePrev}
          disabled={startIndex === 0}
        >
          ❰
        </button>
        <button
          className='next-button'
          onClick={handleNext}
          disabled={endIndex >= data.length}
        >
          ❱
        </button>
      </div>
      </div>
    </div>
    <div className='myCard'>
      <img src={image0} alt="mobile" width="270px" height="200px"/> 
       <h2>BEST OF PHONES</h2>
       <button className='view-all' onClick={viewall}>VIEW ALL</button>
    </div>
    </div>
  );
};

export default Mobile;
