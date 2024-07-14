let nums = [-1, -100, 3, 99];
let n = nums.length;
let k = 2;
let arrOpt = [];

for (let i = n - 1; i > k; i--) {
    arrOpt.push(nums[i]);
}
for (let i = 0; i < n - k; i++) {
    arrOpt.push(nums[i]);
}

console.log(arrOpt);