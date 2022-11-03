/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */

// finished
var lengthOfLastWord = function(s) {
  var ans = 0;
  for(var i = s.length -1; i >=0; i--) {
    if (s[i] !== ' ') {
      break;
    }
  }

  for(;i >= 0; i--) {
    if (s[i] == ' ') {
      break;
    } else {
      ans += 1;
    }
  }

  return ans;
};
// @lc code=end

