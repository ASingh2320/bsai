import React, { useState } from 'react';
import {auth} from "./firebase"
import Col from "./Col"

const Row = (props) => {
    let cols = [];
    for(let i = 0; i < props.cols; i++){
        cols.push(i);
    }
    return(
        <div>
        {
            cols.map(col => <Col row = {props.row} col={col}/>)
        }
        <br></br>
        </div>
    );
}

export default Row