import React, { useState } from "react";
import "./Login.css"
import { useHistory } from "react-router-dom";
import axios from "axios";
const Login = () => {

    const history = useHistory()

    const [login, setlogin] = useState({
        password: "",
        email: ""
    })

    const change = (e) => {

        let copy = { ...login }
        copy[e.target.name] = e.target.value
        // console.log(copy)
        setlogin(copy)
    }
    const loginValidation=(e)=>{

        e.preventDefault();
        axios.post("http://localhost:4000/user/Login", login)
            .then((res) => {
                console.log(res.data)
                if (res.data === "existed") {
                    console.log(res.data)
                    history.push("/Home")
                   
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
                        <span className="title">Login</span>
                        <form onSubmit={loginValidation}>
                            <div className="input-field">
                                <input type="email" placeholder="Enter you Email" required onChange={change} name="email" value={login.email} />
                                <i class="fa-solid fa-envelope icon"></i>
                            </div>
                            <div className="input-field">
                                <input type="password" placeholder="Enter you Password" required onChange={change} name="password" value={login.password} />
                                <i class="fa-solid fa-lock icon"></i>
                                {/* <i class="fa-solid fa-eye-slash showeyepw"></i> */}
                            </div>
                            <div className="checkbox-text">
                                <div className="checkbox-content">
                                    <input type="checkbox" id="check-box" />
                                    <label for="logcheck" className="text"> Remember me</label>
                                </div>
                                <a href="#" className="text">Forgot Password?</a>
                            </div>
                            <div className="input-field button">
                                <input type="submit" />

                            </div>

                        </form>
                        <div className="login-signup">

                            <span className="text">Not a member</span>
                            <a href="#" className="text signup-text">Signup now</a>
                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}

export default Login