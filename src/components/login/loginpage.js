import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import './login.css';
// import logo from '../images/logo.jpg'


function Formvalidation() {
    const history= useHistory();
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const [nameErr, setnameErr] = useState(false)
    const [pwdErr, setpwdErr] = useState(false)

    function validate() {

        if (name.trim().length === 0) {

            setnameErr(true)

        }
        else {
            setnameErr(false)
        }
        if (pwd.trim().length === 0) {

            setpwdErr(true)
        }
        else {
            setpwdErr(false)
            history.push("/home")
        }


    }
    return (

        <div className="container">
            
            <form className="login" >

                <h1>LOGIN</h1>

                <lable className="label1">User name</lable>
                <input type='text'  className="input1" value={name}  onChange={(e) => { setName(e.target.value) }}  />
                
                {nameErr && <small className="error">Enter Something</small>}

                <lable className="label1">Password</lable>
                <input type='password' className="input1" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
                {pwdErr && <small className="error">Enter Something</small>}

                <button onClick={validate} className="btn">LOGIN</button>
                <a id="a1">forgot password?</a>

            </form>

        </div>
    )
}
export default Formvalidation


