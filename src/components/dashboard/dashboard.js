import React from 'react'
import "./Dashboard.css"
import image0 from "../image/stationaries.jpg"
import image2 from "../image/electronics.JPG"
import image6 from "../image/home and furnitures.JPG"
import image7 from "../image/mobile.JPG"

import image9 from "../image/tvand appliances.JPG"
import { useHistory } from 'react-router-dom'
const Dashboard = () => {
    const history=useHistory()
    let viewallstationaries= ()=>{
        history.push('/ListPage?id=OfficeProducts|OfficePaperProducts|Paper|Stationery|Notebooks,WritingPads&Diaries|CompositionNotebooks');
      }
      let viewallelectronics= ()=>{
        history.push('/ListPage?id=Electronics|Headphones,Earbuds&Accessories|Headphones|In-Ear|DisposableBatteries');
      }
      let viewallhome= ()=>{
        history.push('/ListPage?id=Electronics|HomeTheater,TV&Video|Accessories|Cables|HDMICables');
      }
      let viewallMobiles= ()=>{
        history.push('/ListPage?id=Electronics|Mobiles&Accessories|MobileAccessories|Chargers|AutomobileChargers');
      }
      let viewallTv= ()=>{
        history.push('/ListPage?id=Electronics|HomeTheater,TV&Video|Accessories|Cables|HDMICables');
      }

    return (
        <>

            <div className='dash-board-images'>
                <div>
                    <img src={image0} alt="image0" width="140px" height="130px" className='dashboard-img' onClick={viewallstationaries} />
                    <p className='dasboard-p' onClick={viewallstationaries}>stationaries</p>
                </div>

                <div>
                    <img src={image2} alt="image2" width="140px" height="130px" className='dashboard-img' onClick={viewallelectronics} />
                    <p className='dasboard-p'onClick={viewallelectronics}>electronics</p>
                </div>
                <div>
                    <img src={image6} alt="image6" width="140px" height="130px" className='dashboard-img' onClick={viewallhome} />
                    <p className='dasboard-p' onClick={viewallhome}>home and furnitures</p>
                </div>
                <div>
                    <img src={image7} alt="image7" width="140px" height="130px" className='dashboard-img' onClick={viewallMobiles} />
                    <p className='dasboard-p' onClick={viewallMobiles}>Mobiles</p>
                </div>
                <div>
                    <img src={image9} alt="image9" width="140px" height="130px" className='dashboard-img' onClick={viewallTv} />
                    <p className='dasboard-p' onClick={viewallTv}>Tv and appliances</p>
                </div>
            </div>
        </>
    )
}

export default Dashboard