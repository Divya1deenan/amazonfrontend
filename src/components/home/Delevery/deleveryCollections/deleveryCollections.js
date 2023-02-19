import React from 'react'
import "./deleveryCollections.css"
// import pizza from ".images/pizza.webp"


// const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: 
//     prevArrow: 
// };

const delevertItems=[
{
   id:1,
   title:"pizza",
   cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"

},
{
    id:1,
    title:"pizza",
    cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
 
 },
 {
    id:1,
    title:"pizza",
    cover:"https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png"
 
 }

];





const DeleveryCollections = () => {
    return (
        <div className="delevery-collections">
            <div className="max-width">
                <div className="collection-title">eat what makes you happy</div>
            </div>
        </div>
    )
}

export default DeleveryCollections