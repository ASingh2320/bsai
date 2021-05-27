import React, { useState } from 'react';

const View = (props) => {
    return(
        <div>
        <nav style={{flexDirection: "row", backgroundColor: "blue"}}>
            <a style={{color: "grey"}}>Battleship AI</a>
            <a>
            <button type="button" style={{cssFloat: "right", color: "grey"}}>
                Register TEST
            </button>
            </a>
        </nav>
        </div>
    );
}

export default View