/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
  const n = nums.length;
  if (n === 1) return 0;
  let i = 0;
  let ans = 0;
  while(i < n-1) {
    let index = -1;
    let max = 0;
    if (i + nums[i] >= n-1) return ans+1;
    for (let j = i+1; j <= i+nums[i]; j++) {
      if (nums[j] + j > max) {
        max = nums[j] + j;
        index = j;
      }
    }
    i = index;
    ans += 1;
  }
  // [3,2,1]
  return ans;
};
// @lc code=end

