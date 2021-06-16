import React, { useState } from 'react';
import {auth} from "./firebase";
import Unit from "./Unit"

const Col = (props) => {
    return(
        <div style={{cssFloat: "left"}}>
        <Unit row = {props.row} col = {props.col}/>
        </div>
    );
}

export default Col