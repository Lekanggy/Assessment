// Questtion 1
//Check if a string has unique character

function unique(str) {
    if (typeof(str) === 'string') {
        for (let i = 0; i < str.length; i++) {
            for (let j = i + 1; j < str.length; j++) {
                if (str[i] === str[j]) {
                    return false;
                } 
            }
        }

        return true;
    } else {
        console.log("Please input string data")
        return;
    }
    
}
