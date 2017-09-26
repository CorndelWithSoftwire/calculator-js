const readline = require('readline-sync');

console.log('\nWelcome to the calculator!');
console.log('==============================');

console.log('\nPlease enter the operator:');
const operator = readline.prompt();

console.log('How many numbers to you want to ' + operator + '?');
const iterationsString = readline.prompt();
const iterations = +iterationsString;

let numbers = new Array(iterations);
for (let ix = 0; ix < iterations; ix++) {
    console.log('\nPlease enter number ' + (ix + 1) +  ':');
    const argument = readline.prompt();
    numbers[ix] = +argument;
}

let answer = numbers[0];
for (let ix = 1; ix < iterations; ix++) {
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

console.log('\nThe answer is ' + answer);