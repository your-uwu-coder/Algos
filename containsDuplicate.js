function containsDuplicate(nums) {
    let set = new Set(nums)
    console.log(set)
    console.log(nums.length)

    if (set.size == nums.length) {
        return false
    }
    return true
};

console.log(containsDuplicate([1,4,5,7,10,1]))

//utilize Set object to contain nums to remove duplicates
// compare the new set with .size to nums.length 
// return false if it's the same length
//return true if not the same length