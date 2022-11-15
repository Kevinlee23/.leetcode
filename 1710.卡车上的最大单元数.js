/*
 * @lc app=leetcode.cn id=1710 lang=javascript
 *
 * [1710] 卡车上的最大单元数
 */

// @lc code=start
/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
  const n = boxTypes.length;
  let ans = 0;

  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });

  let res = truckSize;
  for (let i = 0; i < n; i++) {
    if (res > boxTypes[i][0]) {
      ans += boxTypes[i][0] * boxTypes[i][1];
      res -= boxTypes[i][0];
    } else {
      ans += res * boxTypes[i][1];
      break;
    }
  }

  return ans;
};
// @lc code=end

