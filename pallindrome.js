//Qusettion 6
//Check for palindrome permutation

const reverseStr = (str) => {
    let reverseStr = typeof (str) === 'string' && str.length > 0 ? str.split('').reverse().join('') : false;
    return reverseStr;
}

const palindromePermutation = (str) => {
    let strArr = str.split(' ')
    console.log(strArr)
    for (let i = 0; i < strArr.length; i++){
        let revArr = reverseStr(strArr[i])
        if (!strArr.length - 1){
            if (revArr === strArr[i + 1]) {
                return true
            }
        }
    }

    return false;
}

