var twoSum = function(nums, target) {
    let holder = {}

    for (let i = 0 ; i < nums.length; i++) {
        let val = nums[i];
        let difference = target - val;

        if (holder[difference] !== undefined) {
            return [i, holder[difference]]
        } else {
            holder[val] = i;
        }
    }
};

console.log(twoSum([1, 5, 9], 6))

// hashmap to hold our previous values to check if we have seen the number
// for loop to iterate through the array 
// subtract target value to nums[i] to see if we have that difference in the hashmap
// else store that value in the hashmap

