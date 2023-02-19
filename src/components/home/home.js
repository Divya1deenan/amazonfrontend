import { useState } from "react";
import Delevery from "./Delevery/Delevery";
import DiningOut from "./DiningOut/DiningOut";
import Footer from "./footer/footer";
import Header from "./header/header";
import Taboptions from "./taboptions/taboptions";

// import logo from '../images/veganlogo.jpg'

function Home() {

    const [activeTab, setActiveTab] = useState("Delevery")

    return (

        <div>
            <Header/>
            <Taboptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectionScreen(activeTab)}
            <Footer/>
        </div>

    );
};
const getCorrectionScreen = (tab) => {
    switch (tab) {

        case "Delevery":
            return <Delevery/>;
        case "DiningOut":
            return <DiningOut/>;
        default: 
        <Delevery/>


    }

};
export default Home