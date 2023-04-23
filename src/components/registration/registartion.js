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

    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {

        let copy = { ...formValues }
        copy[e.target.name] = e.target.value
        // console.log(copy)
        setFormValues(copy)
    }

    const registration = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length === 0) {
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
        } else {
            setErrors(validationErrors);
        }    const validateForm = () => {

        let errors = {};
        if (!formValues.name) {
            errors.name = "Name is required";
        }
        if (!formValues.email) {
            errors.email = "Email is required";
        } else if (!isValidEmail(formValues.email)) {
            errors.email = "Please enter a valid email";
        }
        if (!formValues.password) {
            errors.password = "password number is required";
        } else if (!isValidpassword(formValues.password)) {
            errors.password = "Password must contain at least 8 characters, including at least 1 letter and 1 number";
        
        }
        return errors;
    };
    const isValidEmail = (email) => {
       
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };
    
      const isValidpassword= (password) => {
      
        const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        return passwordRegex.test(password);
      };
    

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
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="input-field">
                            <input type="password" placeholder="Enter you Password" required onChange={handleInputChange} name="password" value={formValues.password} />
                            <i class="fa-solid fa-lock icon"></i>
                            {errors.password && <span className="error">{errors.password}</span>}
                        </div>
                        <div className="input-field">
                            <input type="email" placeholder="Enter you Email" required onChange={handleInputChange} name="email" value={formValues.email} />
                            <i class="fa-solid fa-envelope icon"></i>
                            {errors.email && <span className="error">{errors.email}</span>}
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