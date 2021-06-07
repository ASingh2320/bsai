import React, { useState } from 'react';
import {auth} from "./firebase"

const Login = (props) => {
    const [user, changeuser] =useState("");
    const [pw, changepw]     =useState("");
    const processlogin = async() =>{
        //console.log("Sign up");
        //console.log(user + " " + pw);
        const lol = await auth.signInWithEmailAndPassword(user, pw);
        console.log("lol");
        console.log(auth.currentUser.uid);
    }
    return(
        <div>
        Login<br></br>
        <label>User</label>
        <input type="text" onChange={event => changeuser(event.target.value)}></input><br></br>
        <label>Password</label>
        <input type="text" onChange={event => changepw(event.target.value)}></input><br></br>
        <button type="submit" onClick={processlogin}>Login!</button>
        </div>
    );
}

export default Login