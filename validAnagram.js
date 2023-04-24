var isAnagram = function(s, t) {
    s = s.split("").sort()
    t = t.split("").sort()
    console.log(s, t)

    if (s.length !== t.length) {
        return false;
    }

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== t[i]) {
            return false
        }
    }
    return true;
};



// compare if s and t are matching letters
// sort through s and t 
// for loop through one variable to compare to second variable
// if both arguments are matching, return true
// if not return false

console.log(isAnagram("water", "rwate"))
