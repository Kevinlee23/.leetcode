/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  const n = nums.length;
  var hash = new Map();

  for (let i = 0; i < n; i++) {
    if (hash.get(nums[i]) !== undefined) {
      if (Math.abs(hash.get(nums[i]) - i) <= k) {
        return true;
      }
    }

    hash.set(nums[i], i);
  }

  return false;
};
// @lc code=end

