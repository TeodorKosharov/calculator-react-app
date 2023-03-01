import React from "react";

export default function Display(props) {
    return (<div className="calculator-display">
        <p className="calculator-display-input">{props.displayText}</p>
    </div>);
}