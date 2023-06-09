function isValidSubsequence(array, sequence) {
    let seqTracker = 0
    let arrHolder = []
    for (let i = 0; i < array.length-1; i++) {
        if (array[i] === sequence[seqTracker]) {
            arrHolder.push(array[i])
            seqTracker++ 
        } 
    } 
    if (JSON.stringify(sequence) == JSON.stringify(arrHolder)) {
        return true
    } else {
        return false
    }
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))


function isValidSubsequence(array, sequence) {
    let position = 0;
    for (let i = 0; i < array.length; i++) {
        if (position === array.length) break;
        if (array[i] === sequence[position] && position < sequence.length) {
            position++; 
        }
    }
    return position === sequence.length 
}

console.log(isValidSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10]))