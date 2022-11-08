/*
 * @lc app=leetcode.cn id=216 lang=javascript
 *
 * [216] 组合总和 III
 */

// @lc code=start
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */

var ans = null;
var combinationSum3 = function(k, n) {
  ans = [];
  let back = function(sum, arr, k, n) {
    if (arr.length > k || sum > n) {
      return;
    }

    if (arr.length === k && sum === n) {
      ans.push(arr);
      return;
    }

    for(let i = 1; i <= 9; i++) {
      if (!arr.includes(i)) {
        back(sum + i, [...arr, i], k, n);
      }
    }
  }

  back(0, [], k, n);
  ans.forEach(item => {
    item.sort();
  });

  let newArr = [];
  ans.map(item => {
    if (!newArr.includes(item.join(','))) {
      newArr.push(item.join(','));
    }
  });

  for(let i = 0; i < newArr.length; i++) {
    newArr[i] = newArr[i].split(',');
  }

  return newArr;
};
// @lc code=end

