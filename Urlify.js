// Questtion 3
//Replace all space in a string with '%20'

function replaceSpaces(str) {
    let replaceString = typeof(str) === 'string' ? str.replace(/\s/g, '%20') : console.log('Input string data');
    return replaceString;
}
