/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  const n = nums.length;
  if (n === 1) return true;
  let i = 0;
  while(i < n-1) {
    if (nums[i] === 0) return false;
    let index = -1;
    let max = 0;
    for (let j = i+1; j <= i+nums[i]; j++) {
      if (nums[j] + j > max) {
        max = nums[j] + j;
        index = j;
      }
    }
    i = index;
  }

  return true;
};
// @lc code=end

