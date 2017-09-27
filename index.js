const userInput = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

function printWelcomeMessage() {
    console.log('\nWelcome to the calculator!');
    console.log('==============================');
}

function getCalculationMode() {
    console.log('\nWhich calculator mode do you want?');
    return userInput.getStringWithPrompt(`\
 ${ARITHMETIC_MODE}) Arithmetic
 ${VOWEL_COUNTING_MODE}) Vowel counting`);
}

printWelcomeMessage();
while (true) {
    const calculationMode = getCalculationMode();
    if (calculationMode === ARITHMETIC_MODE) {
        arithmetic.performOneCalculation();
    } else if (calculationMode === VOWEL_COUNTING_MODE) {
        vowelCounting.performOneCalculation();
    }
}