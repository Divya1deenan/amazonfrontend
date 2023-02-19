import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import './registartion.css';
// import logo from '../images/logo.jpg'

function Registration() {
    const history= useHistory();
    const [name, setName] = useState('')
    const [pwd, setPwd] = useState('')
    const [db, setDb] = useState('')
    const [contact, setContact] = useState('')
    const [nameErr, setnameErr] = useState(false)
    const [pwdErr, setpwdErr] = useState(false)
    const [dbErr, setDbErr] = useState(false)
    const [contactErr, setcontactErr] = useState(false)
    function validate() {

        if (name.trim().length === 0) { setnameErr(true) }
        else { setnameErr(false) }
        if (pwd.trim().length === 0) { setpwdErr(true) }
        else { setpwdErr(false) }
        if (db.trim().length === 0) { setDbErr(true) }
        else { setDbErr(false) }
        if (contact.trim().length === 0) { setcontactErr(true) }
        else { 
            setcontactErr(false) 
            sessionStorage.setItem("user",{"username":name,"password":pwd})
            history.push("/login")
                   
        }
    }





    return (

        <div className="registartion">

            <form className="form">
                <h1>REGISTARTION FORM</h1>
                <lable className="lable2">UserName</lable>
                <input type="text" placeholder="Enter ur name" className="input2" value={name} onChange={(e) => { setName(e.target.value) }} />
                {nameErr && <small className="error">Enter Something</small>}

                <lable className="lable2">Password</lable>
                <input type="password" placeholder="Enter ur password" className="input2" value={pwd} onChange={(e) => { setPwd(e.target.value) }} />
                {pwdErr && <small className="error">Enter Something</small>}

                <lable className="lable2">DOB</lable>
                <input type="date" placeholder="Enter ur DOB" className="input2" value={db} onChange={(e) => { setDb(e.target.value) }} />
                {dbErr && <small className="error">Enter Something</small>}


                <lable className="lable2">contact number</lable>
                <input type="number" placeholder="Enter ur contactnumber " className="input2" value={contact} onChange={(e) => { setContact(e.target.value) }} />
                {contactErr && <small className="error">Enter Something</small>}



                <button onClick={validate} className="reg">Register</button>

            </form>

        </div>

    )
}

export default Registration


