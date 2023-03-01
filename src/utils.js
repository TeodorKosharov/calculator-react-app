const mathOperators = ['+', '-', '*', '/'];

function typeText(passedText, newValue) {

    if (passedText === '' && mathOperators.includes(newValue)) return '';
    else if (passedText === 'Cannot divide by 0' && mathOperators.includes(newValue)) return '';
    else if (passedText === '' || passedText === 'Cannot divide by 0') return newValue;

    let newText = passedText + newValue;

    const lastChar = newText[newText.length - 1];
    const beforeLastChar = newText[newText.length - 2];

    // If the last char and before last char are math operators, then type the last entered math operator
    if (mathOperators.includes(lastChar) && mathOperators.includes(beforeLastChar)) {
        newText = newText.slice(0, newText.length - 2) + newValue;
    }

    return newText;
}

function solve(expression) {
    if (expression === '') return '';
    else if (mathOperators.includes(expression[expression.length - 1])) return expression;

    const result = eval(expression);
    if (result === Infinity || isNaN(result)) {
        return ['Cannot divide by 0', 'Cannot divide by 0'];
    }

    return [result.toFixed(2), `${expression} = ${result.toFixed(2)}`];
}

export {
    typeText, solve
}
