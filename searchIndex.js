//Binary Search through sorted array.
//Find index where target is found
//If there is no target with index, return the index where the num should be
//Push the target number into the array, then sort it.
//minimal test cases allow brute forcing with built in sort() method

input = [1, 3, 5, 6];


function indexSearch (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]===target) {
            return nums.indexOf(target);
        }
        else {
            nums.push(target);
            nums.sort();
            return nums.indexOf(target);
        }
    }
}

console.log("index of target = ", indexSearch(input, 5));
console.log("index of target = ", indexSearch(input, 2));