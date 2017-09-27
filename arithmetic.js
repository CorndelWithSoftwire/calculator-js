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
    let answer = numbers[0];
    for (let ix = 1; ix < numbers.length; ix++) {
        if (operator === '+') {
            answer += numbers[ix];
        } else if (operator === '-') {
            answer -= numbers[ix];
        } else if (operator === '*') {
            answer *= numbers[ix];
        } else if (operator === '/') {
            answer /= numbers[ix];
        }
    }
    return answer;
}

exports.performOneCalculation = function() {
    const operator = getOperator();
    const numbers = getNumbers(operator);
    const answer = calculateAnswer(operator, numbers);
    console.log(`\nThe answer is ${answer}`);
}