// Questtion 2
//Check if a string is a permutation of the other

const stringPermutation = (str1, str2) => {
    let sort1 = typeof (str1) === 'string' ? str1.split('').sort().join('') : false;
    let sort2 = typeof (str2) === 'string' ? str2.split('').sort().join('') : false;
    if (sort1 === sort2) {
        return true;
    }

    return false;
}
