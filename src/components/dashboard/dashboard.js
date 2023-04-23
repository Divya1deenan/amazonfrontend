import React from 'react'
import "./Dashboard.css"

import image0 from "../image/topoffers.JPG"
// import image1 from "../image/beauty.JPG"
import image2 from "../image/electronics.JPG"
// import image3 from "../image/fashion.JPG"
import image4 from "../image/flights.JPG"
// import image5 from "../image/grocery.JPG"
import image6 from "../image/home and furnitures.JPG"
import image7 from "../image/mobile.JPG"

import image9 from "../image/tvand appliances.JPG"
const Dashboard = () => {



    return (
        <>
           
            <div className='dash-board-images'>
                <div>
                <img src={image0} alt="image0" width="84px" height="84px" className='dashboard-img' />
                <p className='dasboard-p'>Top Offers</p>
                </div>
                {/* <div>
                <img src={image1} alt="image1" width="84px" height="84px" className='dashboard-img' />
                <p className='dasboard-p'>beauty</p>
                </div> */}
                <div>
                <img src={image2} alt="image2" width="84px" height="84px" className='dashboard-img'/>
                <p className='dasboard-p'>electronics</p>
                </div>
                {/* <div>
                <img src={image3} alt="image3" width="84px" height="84px"className='dashboard-img' />
                <p className='dasboard-p'>fashion</p>
                </div> */}
                <div>
                <img src={image4} alt="image4" width="84px" height="84px"className='dashboard-img' />
                <p className='dasboard-p'>flights</p>
                </div>
                {/* <div>
                <img src={image5} alt="image5" width="84px" height="84px"className='dashboard-img' />
                <p className='dasboard-p'>grocery</p>
                </div> */}
                <div>
                <img src={image6} alt="image6" width="84px" height="84px" className='dashboard-img'/>
                <p className='dasboard-p'>home and furnitures</p>
                </div>
                <div>
                <img src={image7} alt="image7" width="84px" height="84px" className='dashboard-img'/>
                <p className='dasboard-p'>Mobiles</p>
                </div>
                <div>
                <img src={image9} alt="image9" width="84px" height="84px"className='dashboard-img' />
                <p className='dasboard-p'>Tv and appliances</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard