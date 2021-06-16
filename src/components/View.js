import React, { useState } from 'react';
import Register from "./Register";
import Login from "./Login";
import Grid from "./Grid"

const View = (props) => {
    const [register, showreg] = useState(false);
    const [login, showlog] = useState(false);
    const [grid, showgrid] = useState(true);
    const [rows, editrow] = useState(5);
    const [cols, editcol] = useState(5);

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
        {
            grid && <Grid cols = {cols} rows ={rows}/>
        }
        </div>
    );
}

export default View