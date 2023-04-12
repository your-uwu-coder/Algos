function containsDuplicate(nums) {
    // sort the array to find nums quicker
    nums.sort((a,b) => a - b)
    // for loop to check if there are two of the same numbers in the array
    //use array.length - 1 to get the elements within the array
    for (let i = 0 ; i < nums.length-1; i++) {
        if (nums[i] === nums[i+1]) {
                return true
            }
    }
    return false;
    // return true if there are two same nums
    // false is no matching nums

};

console.log(containsDuplicate([1,2,3,1]))