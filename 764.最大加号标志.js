/*
 * @lc app=leetcode.cn id=764 lang=javascript
 *
 * [764] 最大加号标志
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function(n, mines) {
  if (mines.length == n * n) return 0;
  if (n <= 1) return 0;
  
  var g = [];
  var u = [];
  var r = [];
  var d = [];
  var l = [];
  for (var i = 0; i < n+10; i++) {
    g[i] = [];
    u[i] = [];
    r[i] = [];
    d[i] = [];
    l[i] = []
    for (var j = 0; j < n+10; j++) {
      g[i][j] = 1;
      u[i][j] = 0;
      r[i][j] = 0;
      d[i][j] = 0;
      l[i][j] = 0;
    }
  }

  for (var i = 0; i < mines.length; i++) {
    g[mines[i][0]+1][mines[i][1]+1] = 0;
  }

  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      if (g[i][j] == 1) {
        d[i][j] = d[i-1][j] + 1;
        r[i][j] = r[i][j-1] + 1;
      }

      if (g[n-i+1][n-j+1] == 1) {
        u[n-i+1][n-j+1] = u[n-i+2][n-j+1] + 1;
        l[n-i+1][n-j+1] = l[n-i+1][n-j+2] + 1;
      }
    }
  }

  let ans = 0;
  for (var i = 1; i <= n; i++) {
    for (var j = 1; j <= n; j++) {
      ans = Math.max(ans, Math.min(u[i][j], r[i][j], d[i][j], l[i][j]));
    }
  }

  return ans;
};
// @lc code=end

