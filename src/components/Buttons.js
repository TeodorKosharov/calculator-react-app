import {solve, typeText} from "../utils";

export default function Buttons(props) {

    const displayText = props.displayText;
    const setDisplayText = props.setDisplayText;
    const calculations = props.calculations;
    const setCalculations = props.setCalculations;

    return (<div className="buttons-box">
        <button onClick={() => setDisplayText(typeText(displayText, '7'))} className="number-btn">7
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '8'))} className="number-btn">8
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '9'))} className="number-btn">9
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '/'))} className="number-btn">/
        </button>

        <button onClick={() => setDisplayText(typeText(displayText, '4'))} className="number-btn">4
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '5'))} className="number-btn">5
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '6'))} className="number-btn">6
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '*'))} className="number-btn">*
        </button>

        <button onClick={() => setDisplayText(typeText(displayText, '1'))} className="number-btn">1
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '2'))} className="number-btn">2
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '3'))} className="number-btn">3
        </button>
        <button onClick={() => setDisplayText(typeText(displayText, '-'))} className="number-btn">-
        </button>

        <button onClick={() => setDisplayText(typeText(displayText, '0'))} className="number-btn">0
        </button>
        <button onClick={() => setDisplayText('')} className="number-btn">C</button>
        <button onClick={() => setDisplayText(typeText(displayText, '+'))} className="number-btn">+
        </button>
        <button onClick={() => {
            const [result, expression] = solve(displayText);
            setDisplayText(result);
            setCalculations([...calculations, expression]);
        }} className="number-btn">=
        </button>
    </div>);
}