import React, { useState } from 'react';
import {auth} from "./firebase"

const Register = (props) => {
    const [user, changeuser] =useState("");
    const [pw, changepw]     =useState("");
    const processsignup = () =>{
        //console.log("Sign up");
        //console.log(user + " " + pw);
        return auth.createUserWithEmailAndPassword(user, pw);
    }
    return(
        <div>
        Register<br></br>
        <label>User</label>
        <input type="text" onChange={event => changeuser(event.target.value)}></input><br></br>
        <label>Password</label>
        <input type="text" onChange={event => changepw(event.target.value)}></input><br></br>
        <button type="submit" onClick={processsignup}>Sign Up!</button>
        </div>
    );
}

export default Register