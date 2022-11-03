/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let minPrice = 1e9;
  let maxPrice = 0;
  const n = prices.length;
  for (let i = 0; i < n; i++) {
    maxPrice = Math.max(maxPrice, prices[i] - minPrice);
    minPrice = Math.min(minPrice, prices[i]);
  }

  return maxPrice;
};
// @lc code=end

