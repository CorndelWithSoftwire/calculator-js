const readline = require('readline-sync');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

function getStringInputWithPrompt(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

function getNumberInputWithPrompt(prompt) {
    let response;
    do {
        response = +getStringInputWithPrompt(prompt);
    } while (isNaN(response));
    return response;
}

function getCalculationMode() {
    console.log('Which calculator mode do you want?');
    return getStringInputWithPrompt(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
}

function getOperator() {
    return getStringInputWithPrompt('Please enter the operator:');
}

function getNumberArray(operator) {
    const iterations = getNumberInputWithPrompt(`How many numbers do you want to ${operator}?`);
    let numbers = new Array(iterations);
    for (let ix = 0; ix < iterations; ix++) {
        numbers[ix] = getNumberInputWithPrompt(`Please enter number ${ix + 1}:`);
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

function countVowels(string) {
    let counts = {A: 0, E: 0, I: 0, O: 0, U: 0};
    for (let char of string) {
        const upperChar = char.toUpperCase();
        if (counts.hasOwnProperty(upperChar)) {
            counts[upperChar]++;
        }
    }
    return counts;
}

function performOneArithmeticCalculation() {
    const operator = getOperator();
    const numbers = getNumberArray(operator);
    const answer = calculateAnswer(operator, numbers);
    console.log(`\nThe answer is ${answer}`);
}

function performOneVowelCountingCalculation() {
    const string = getStringInputWithPrompt('Please enter a string:');
    const answer = countVowels(string);

    console.log('The vowel counts are:');
    for (let vowel in answer) {
        console.log(`  ${vowel}: ${answer[vowel]}`);
    }
}

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        performOneArithmeticCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        performOneVowelCountingCalculation();
    }
}