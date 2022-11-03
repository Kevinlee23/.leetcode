/*
 * @lc app=leetcode.cn id=40 lang=javascript
 *
 * [40] 组合总和 II
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum2 = function(candidates, target) {
  const res = [];
  const path = [];
  const len = candidates.length;
  candidates.sort();

  back(0, 0);
  return res;

  function back(sum, i) {
    if (sum > target) return ;
    if (sum === target) {
      res.push(Array.from(path));
      return ;
    }

    let f = -1;
    for (let j = i; j < len; j++) {
      const n = candidates[j];
      if (n > target - sum || n === f) continue;
      path.push(n);
      sum += n;
      f = n;
      back(sum, j+1);
      path.pop();
      sum -= n;
    }
  }
};
// @lc code=end

