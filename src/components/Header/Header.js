import React from 'react'
import "./Header.css"

const Header = () => {
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src="https://globalprimenews.com/wp-content/uploads/2022/08/IMG_20220801_205340-777x437.png"  width="60px"alt="logo"/>
                    
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