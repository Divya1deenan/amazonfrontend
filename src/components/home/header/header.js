import React from "react";
import './header.css'
import "../style/commonclass.css"

function Header() {

    return (
        <div className="max-width header">
            <p className="header-logo">Vegan</p>

            <div className="header-right">
                <div className="header-location-search-container">
                    <div className="location-wrapper">
                        <div className="location-icon-name">
                            <i className="fi fi-rr-marker absolute-center location-icon"></i>
                            <div>Chennai</div>
                        </div>
                        <i className="fi fi-rr-caret-down absolute-center"></i>
                    </div>
                    <div className="loctaion-search-seprator"></div>
                    <div className="header-searchbar">
                        <i class="fi fi-rr-search absolute-center search-icon"></i>
                        <input placeholder="enter the restaruant. or dish" className="search-input" />
                    </div>
                    </div>
                    <div className="profile-wrapper">
                        <i class="fi fi-rr-user  header-profile" ></i>
                        <span className="header-username">Divya</span>
                        <i class="fi fi-rr-angle-small-down absolute-center header-caret"></i>
                    </div>
                

            </div>

        </div>
    )
}
export default Header