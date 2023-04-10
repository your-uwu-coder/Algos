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