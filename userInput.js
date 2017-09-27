const readline = require('readline-sync');

function getStringWithPrompt(prompt) {
    console.log(`\n${prompt}`);
    return readline.prompt();
}

exports.getStringWithPrompt = getStringWithPrompt;

exports.getNumberWithPrompt = function(prompt) {
    let response;
    do {
        response = +getStringWithPrompt(prompt);
    } while (isNaN(response) && (console.log(`${response} is not a number`) || true));
    return response;
}
