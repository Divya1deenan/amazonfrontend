import React  from "react";
import "./filteritems.css"


function Filteritems({filter}){


    return(

        <div className="filter-item">
             
             {filter.icon && filter.icon}
                <div className="filter-name">{filter.title}</div>
            
             </div>
    )


}
export default Filteritems