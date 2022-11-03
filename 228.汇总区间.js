/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
  const n = nums.length;
  if (n === 0) return [];
  if (n === 1) return [String(nums[0])];
  let res = [];
  let tmp = [nums[0]];
  for (let i = 1; i < n; i++) {
    if (nums[i] - tmp.at(-1) === 1) {
      tmp.push(nums[i]);
    } else {
      if(tmp.length > 1) {
        res.push(tmp.at(0) + '->' + tmp.at(-1));
      } else {
        res.push(String(tmp[0]));
      }
      tmp = [];
      tmp.push(nums[i]);
    }
  }
  if (tmp.length !== 0) {
    if(tmp.length > 1) {
      res.push(tmp.at(0) + '->' + tmp.at(-1));
    } else {
      res.push(String(tmp[0]));
    }
  }
  
  return res;
};
// @lc code=end

