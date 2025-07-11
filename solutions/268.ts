/*
    Leetcode
    - Task: https://leetcode.com/problems/missing-number
    - Solution: https://leetcode.com/submissions/detail/1694024317/
*/

function findMissingNumber(nums: number[], left: number, right: number) : number {
    const center = Math.ceil((right - left) / 2) + left;

    if(nums[0] != 0) return 0;

    if(center == right || center == left) {
        if(nums[center] == right) return left + 1;
        else return right;
    }

    if(nums[center] == center) {
        return findMissingNumber(nums, center, right);
    } else {
        return findMissingNumber(nums, left, center);
    }
}

function missingNumber(nums: number[]): number {
    nums.sort((a,b) => a-b);
    return findMissingNumber(nums, 0, nums.length);
};

// console.log(missingNumber([3,0,1]))
// console.log(missingNumber([0,1]))
// console.log(missingNumber([9,6,4,2,3,5,7,0,1]))
console.log(missingNumber([1]))