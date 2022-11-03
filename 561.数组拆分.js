/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
  const n = nums.length;
  nums.sort((a, b) => {
    return a-b;
  });

  var ans = 0;
  for(var i = 0; i <= n-2; i += 2) {
    ans += Math.min(nums[i], nums[i+1]);
  }
  
  return ans;
};
// @lc code=end

