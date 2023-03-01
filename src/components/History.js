import React from "react";

export default function History(props) {

    const calculations = props.calculations;
    const setCalculations = props.setCalculations;

    return (
        <div className="history-box">
            <h2>History <i className="fa-solid fa-clock-rotate-left"></i></h2>
            <i className="fa-solid fa-trash" title="Clear" onClick={() => setCalculations([])}></i>

            <div className="calculations-box">
                {calculations.map(calculation => <p key={calculation}>{calculation}</p>)}
            </div>
        </div>
    );
}