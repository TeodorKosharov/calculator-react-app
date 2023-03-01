import React from "react";
import History from "./History";
import Display from "./Display";
import Buttons from "./Buttons";

export default function Main() {

    const [displayText, setDisplayText] = React.useState('');
    const [calculations, setCalculations] = React.useState([]);

    return (
        <main>
            <div className="calculator">
                <Display displayText={displayText}/>
                <Buttons
                    displayText={displayText}
                    setDisplayText={setDisplayText}
                    calculations={calculations}
                    setCalculations={setCalculations}
                />
            </div>

            <History calculations={calculations} setCalculations={setCalculations}/>
        </main>
    );
}