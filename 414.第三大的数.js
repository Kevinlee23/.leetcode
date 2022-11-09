/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums.sort((a ,b) => {
    return b - a;
  });

  let newArr = [];
  nums.map(item => {
    if (!newArr.includes(item)) {
      newArr.push(item);
    }
  });

  const n = newArr.length;
  if(n < 3) {
    return newArr[0];
  } else {
    return newArr[2];
  }
};
// @lc code=end

