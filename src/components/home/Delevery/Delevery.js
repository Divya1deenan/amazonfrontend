import React from "react";
import Filters from "../filters/filters";
import DeleveryCollections from "./deleveryCollections/deleveryCollections";

const deleveryFilters = [
    {

        id: 1,
        icon: <i class="fi fi-rr-settings-sliders absolute-center"></i>,
        title: "filters"
    },

    {
        id: 2,
        title: "Rating:4.0+"
    },
    {
        id: 3,
        title: "safe and hygenics"
    },
    {
        id: 4,
        title: "pure Veg"
    },
    {
        id: 5,
        icon: <i class="fi fi-rr-apps-sort absolute-center" ></i>,
        title: "Delevery Time"
    },
    {
        id: 6,
        title: "Great offers"
    }





];
function Delevery() {

    return (

        <div>
            <div className="max-width">
                <Filters filterList={deleveryFilters} />
            </div>
<DeleveryCollections/>
        </div>
    )

}
export default Delevery