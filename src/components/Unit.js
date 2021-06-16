import React, { useState } from 'react';
import {auth} from "./firebase"

const Unit = (props) => {
    return(
        <div>
            {"id:" + props.col + "" + props.row}
        </div>
    );
}

export default Unit