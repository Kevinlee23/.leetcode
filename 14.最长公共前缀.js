/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  const n = strs.length;
  let m = 200;
  for (let i = 0; i < n; i++) {
    m = Math.min(m, strs[i].length);
  }

  let ans = 0;
  for (var i = 0; i < m; i++) {
    let c = strs[0][i];
    for (var j = 1; j < n; j++) {
      if (strs[j][i] != c) break;
    }
    
    if (j != n) break;
    ans = i+1;
  }

  return strs[0].slice(0, ans);
};
// @lc code=end

