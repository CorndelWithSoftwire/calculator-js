const userInput = require('./userInput');

function getOperator() {
    return userInput.getStringWithPrompt('Please enter the operator:');
}

function getNumbers(operator) {
    const iterations = userInput.getNumberWithPrompt(`How many numbers do you want to ${operator}?`);
    let numbers = new Array(iterations);
    for (let ix = 0; ix < iterations; ix++) {
        numbers[ix] = userInput.getNumberWithPrompt(`Please enter number ${ix + 1}:`);
    }
    return numbers;
}

function calculateAnswer(operator, numbers) {
    if (operator === '+') {
        return numbers.reduce((acc, curr) => acc + curr, 0);
    } else if (operator === '-') {
        return numbers.slice(1).reduce((acc, curr) => acc - curr, numbers[0]);
    } else if (operator === '*') {
        return numbers.reduce((acc, curr) => acc * curr, 1);
    } else if (operator === '/') {
        return numbers.slice(1).filter(x => x !== 0).reduce((acc, curr) => acc / curr, numbers[0]);
    } else {
        throw new Error(`The operator '${operator}' is not supported`);
    }
}

exports.performOneCalculation = function() {
    const operator = getOperator();
    const numbers = getNumbers(operator);
    try {
        const answer = calculateAnswer(operator, numbers);
        console.log(`\nThe answer is ${answer}`);
    } catch (e) {
        console.log(`\n${e.message}`);
    }
}