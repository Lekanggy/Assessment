// Questtion 4
//Check for One Aways

const oneAway = (str1, str2) => {
    let stringArr1 = typeof (str1) === 'string' && str1.length > 0 ? str1.split('') : false;
    let stringArr2 = typeof (str2) === 'string' && str2.length > 0 ? str2.split('') : false;
    let count = 0;

    for (let i = 0; i < stringArr2.length; i++) {
        if (stringArr1.includes(stringArr2[i])) {
            count += 1;
        } else {
            continue;
        }
    }

    if ((stringArr1.length - count) === 1) {
        return true;
    }
    return false;
}
