/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  const n = nums.length;
  var hash = new Map();
  for (let i = 0; i < n; i++) {
    if (!hash.get(nums[i])) {
      hash.set(nums[i], 1);
    } else {
      return true;
    }
  }
  return false;
};
// @lc code=end

