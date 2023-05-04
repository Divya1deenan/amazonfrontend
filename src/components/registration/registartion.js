import React, { useState } from "react";
import "./Registartion.css"
import { useHistory } from "react-router-dom";
import axios from "axios";

const Registartion = () => {

    const history = useHistory()
    const [formValues, setFormValues] = useState({
        name: "",
        password: "",
        email: ""
    })

    
    const handleInputChange = (e) => {

        let copy = { ...formValues }
        copy[e.target.name] = e.target.value
        // console.log(copy)
        setFormValues(copy)
    }

    const registration = (e) => {
        e.preventDefault();
        
            axios.post("http://localhost:4000/user/Registartion", formValues)
                .then((res) => {
                    // console.log(res.data)
                    if (res.data === "data Inserted") {
                        history.push("/Login")

                    }
                })
                .catch((err) => {
                    console.log(err)
                })
        } 
    

return (
    <div className="main">
        <div className="image">
            <img src="https://img.freepik.com/free-photo/add-cart-buy-now-online-commerce-graphic-concept_53876-133964.jpg?w=740&t=st=1681148173~exp=1681148773~hmac=06a2a079071c112a69f7171336d819a9b39c4e11de109034acf2535c2b5a41f9" alt="main" />
        </div>
        <div className="container">
            <div className="forms">
                <div className="form login">
                    <span className="title">Registration</span>
                    <form onSubmit={registration}>
                        <div className="input-field">
                            <input type="text" placeholder="Enter you Name" onChange={handleInputChange} name="name" value={formValues.name} />
                            <i className="fa-solid fa-user"></i>
                            
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Enter you Password" required onChange={handleInputChange} name="password" value={formValues.password} />
                            <i class="fa-solid fa-lock icon"></i>
                            
                        </div>
                        <div className="input-field">
                            <input type="email" placeholder="Enter you Email" required onChange={handleInputChange} name="email" value={formValues.email} />
                            <i class="fa-solid fa-envelope icon"></i>
                           
                        </div>
                        <div className="checkbox-text">
                            <div className="checkbox-content">
                                <input type="checkbox" id="check-box" />
                                <label for="logcheck" className="text"> Remember me</label>
                            </div>
                            <a href="#" className="text">Forgot Password?</a>
                        </div>
                        <div className="input-field button">
                            {/* <button onClick={registration}>Submit</button> */}
                            <input type="submit" />

                        </div>

                    </form>
                    {/* <div className="login-signup">

                        <span className="text">Not a member</span>
                        <a href="#" className="text signup-text">Signup now</a>
                        </div> */}

                </div>

            </div>


        </div>
    </div>
)

 }
export default Registartion