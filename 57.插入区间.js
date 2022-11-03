/*
 * @lc app=leetcode.cn id=57 lang=javascript
 *
 * [57] 插入区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const n = intervals.length;
  if (n === 0) return [newInterval];
  let ans = [];
  let i = 0;
  // intervals[i][1] > newInterval[0]
  while (i < n && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    i++;
  }
  // intervals[i][0] <= newInterval[1]
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]); 
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;    
  }
  ans.push(newInterval);

  while (i < n) {
    ans.push(intervals[i]);
    i++;
  }

  return ans;
};
// @lc code=end

