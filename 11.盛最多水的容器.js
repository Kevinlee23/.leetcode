/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  const n = height.length;
  if (n <= 1) return 0;
  if (n == 2) return Math.min(height[0], height[1]);

  var l = 0;
  var r = n-1;
  var ans = 0;
  while (l < r) {
    ans = Math.max(ans, (r-l) * Math.min(height[l], height[r]));
    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return ans;
};
// @lc code=end

