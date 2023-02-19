import React from "react";
import "./filter.css"
import Filteritems from "./filteritems";

const Filters = ({ filterList }) => {
    return (

        <div className="filters">

            {filterList &&
                filterList.map((filter) => {

                    return <Filteritems filter={filter} key={filter.id} />

                })}

        </div>


    )

}


export default Filters