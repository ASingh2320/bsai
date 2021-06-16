import React, { useState } from 'react';
import {auth} from "./firebase"
import Row from "./Row"

const Grid = (props) => {
    let rows = [];
    for(let i = 0; i < props.rows; i++){
        rows.push(i);
    }
    return(
        <div>
        Grid
        {
            rows.map(row => <Row row = {row} cols = {props.cols}/>)
        }
        </div>
    );
}

export default Grid