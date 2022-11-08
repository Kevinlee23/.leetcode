/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  const n = words.length;
  let ans = 0;

  let hash = new Map();
  allowed.split('').map(c => {
    hash.set(c, 1);
  });

  for (let i = 0; i < n; i++) {
    let s = words[i];

    let flag = 1;
    s.split('').map(c => {
      if (!hash.get(c)) {
        flag = 0;
      }
    });

    if (flag == 1) ans += 1;
  }

  return ans;
};
// @lc code=end

