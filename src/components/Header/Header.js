import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src="https://th.bing.com/th/id/OIP.D-TfjSoY-c3ccnccBUQqfwHaHd?pid=ImgDet&rs=1"  width="60px"alt="logo"/>
                    
                    </div> 
               
                <div className='header-text'>
                    <input type="text" value="Search for Products and more" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                   
                </div>

                <button className='login-btn'>LOGIN</button>
                
                <a href='https://www.flipkart.com/' className='nav-link'>Become a seller</a>
                <a href='https://www.flipkart.com/'className='nav-link'>More</a>

                <a href='https://www.flipkart.com/'className='nav-link'>
                <i class="fa-solid fa-cart-shopping"></i>  Cart </a>
                
            </nav>

        </>

    )
}

export default Header