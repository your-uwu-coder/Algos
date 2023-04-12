function sortedSquaredArray(array) {
    for(let i = 0; i < array.length; i++) {
        array[i] = array[i] * array[i]    
    }
    return array.sort(function(a,b) {
        return a-b
    })
}

console.log(sortedSquaredArray([1,4,9,25,36,64,81]))

