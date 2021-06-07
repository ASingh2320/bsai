import React, { useState } from 'react';
import Register from "./Register";
import Login from "./Login"

const View = (props) => {
    const [register, showreg] = useState(false);
    const [login, showlog] = useState(false);

    const showRegister = () => {
        showreg(true);
        showlog(false);
    }
    const showLogin = () => {
        showreg(false);
        showlog(true);
    }
    return(
        <div>
        <nav style={{flexDirection: "row", backgroundColor: "blue"}}>
            <a style={{color: "grey"}}>Battleship AI</a>
            <a>
            <button type="button" style={{cssFloat: "right", color: "grey"}} onClick={showRegister}>
                Register
            </button>
            <button type="button" style={{cssFloat: "right", color: "grey"}} onClick={showLogin}>
                Login
            </button>
            </a>
        </nav>
        {
           register && <Register/>
        }
        {
            login && <Login/>
        }
        </div>
    );
}

export default View