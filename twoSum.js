// Two sum 
let num = [3, 2, 3, 4]
let target = 6

const twoSum = function (nums, target) {
    let number = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target) {
                number.push(i, j)
            }
        }
    }

    return number
}

console.log(num.length)


console.log(twoSum(num, target))
