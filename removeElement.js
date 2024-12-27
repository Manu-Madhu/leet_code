let nums = [1]
let target = 3


var RemoveElement = (nums, val) => {
    let k = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            nums[k] = nums[i];
            k++
        }
    }

    nums.length = k

    return nums
}

console.log(RemoveElement(nums, target));

var moveZeroes = function (nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i !== k) {
                let temp = nums[k]
                nums[k] = nums[i]
                nums[i] = temp
            }
            k++;
        }
    }
    return nums;
};
console.log(moveZeroes(nums));