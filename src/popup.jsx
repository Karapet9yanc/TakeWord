import React from "react";
import  { render } from  "react-dom";

const TakeWord = () => {
    return(
        <div>
            <h1>Extension Chrome</h1>
            <p>This is exceedTeam</p>
        </div>
    )
}

render(<TakeWord />, document.getElementById("react-target"))