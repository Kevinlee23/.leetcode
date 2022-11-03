/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  const n = prices.length;
  if (n === 0 || n === 1) return 0;
  let ans = 0;

  let buyPrice = prices[0];
  let buyIndex = 0
  for (let i = 1; i < n; i++) {
    if (prices[i] < prices[i-1]) {
      ans += prices[i-1] - buyPrice;

      buyIndex = i;
      buyPrice = prices[i];
    }
  }

  ans += prices[n-1] - buyPrice;

  return ans;
};
// @lc code=end

