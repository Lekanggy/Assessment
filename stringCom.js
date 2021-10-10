// Questtion5
// String Compression

const stringCompression = (str) => {
    let compressedString = ''
    let strArr = typeof(str) === 'string' && str.length > 0 ?  str.split('') : false
    for (let i = 0; i < strArr.length; i++) {
        let count = 1
        let currentLetter = strArr[i]
        while (i < strArr.length - 1 && strArr[i] === strArr[i + 1]) {
            count++
            i++
        }
        if (count === 1) {
            compressedString += currentLetter
        } else {
            compressedString += currentLetter + count
        }
    }

    return compressedString
}
