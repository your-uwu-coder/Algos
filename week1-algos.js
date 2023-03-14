//Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!

const pushFront = (arr, val) => {
    for(let i=arr.length; i>= 0; i--) {
        arr[i] = arr [i-1]
    }
    arr[0] = val

    return arr;
}

console.log(pushFront([5,7,2,3], 8))



//Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
const popFront = (arr) => {
    let temp = arr[0]
    for(let i=0; i<arr.length; i++) {
        arr[i] = arr [i + 1]
    }
    arr.length = arr.length -1
    console.log(arr)
    return temp
}

console.log(popFront([0,5,10,15]))


//Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). 
const insertAt = (arr, idx, val) => {
    for (let i = arr.length; i>=idx; i--) {
        arr[i] = arr[i-1]
    }
    arr[idx] = val
    return arr
}
console.log(insertAt([100,200,5], 2, 311))