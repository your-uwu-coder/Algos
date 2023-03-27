// ! Remove Blanks 
// Create a function that, given a string, returns all of that string's contents, but without blanks


const removeBlanks = (str) => {
    //make a new string to a blank string
    //loop through the str
    //check if the next letter is not a space, then connect with a new str
    //return str
    let newStr = ""

    for(let i = 0; i < str.length; i++) {
        if(str[i] != " ") {
            newStr += str[i]
        }
    }
    return newStr; 
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

// *Second way to do removeBlanks

const removeBlank = (str) => {
    let newStr = " "
    for (let char in str) {
        if(str[char] != " "){
            newStr += str[char]
        }
    }
    return newStr
}

console.log(removeBlank(" Pl ayTha tF u nkyM usi c "));

// !Get Digits
// Create a JS function that given a str, returns the integer made from the string's digits. You are allowed to us isNaN() and Number()

const getDigits = (str) => {
    //make a new str
    //for char in str
        //if char is a #
            // concatenate into new str
    // turn str into a number
    // return new str

    let newStr = ""
    for(let char in str) {
        // *check if the char is NOT a number 
        if(!isNaN(str[char])) {
            newStr += str[char]
        }
    }
    return Number(newStr)
}

console.log(getDigits("abc8c0d1ngd0j0!8"))

//! Acronyms
// Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

const acronym = (str) => {
    let wordArr = str.split(" ")
    let acronymStr = ""

    //loop through wordsArr
    //grab only the first letter
        //change first letter to uppercase
        //concatenate the letter into acronym str
    for(let word in wordArr){
        if(wordArr[word].length > 0) {
            acronymStr += wordArr[word][0].toUpperCase()

        }
    }
    return acronymStr
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "))

// ! Count Non-Spaces
// Create a function that, given a string, returns the number of non-space characters found in the string. 
    // initialize counter variable
    //loop thru str
        // if char is not a space
            //increment the count
const countNonSpaces = (str) => {
    let counter = 0
    for(let char in str) {
        if(str[char] != " "){
            counter++
        }
        
    }
    return counter;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"))

// ! Remove Shorter Strings
// Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const removeShorterStrings = (arr, num) => {
    // initialize new arr
    // track the next variable
        //loop through the arr
            //if value is >= to num
                //add val to new arr
                //return arr
    let newStrings = []
    let nextIdx = 0

    for (let value in arr) {
        if(arr[value].length >= num) {
            newStrings[nextIdx++] = arr[value]
        }
    }
    return newStrings
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))