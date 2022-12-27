/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const toRoman = (n) => {
    let str;
    switch (n) {
      case 1000:
        str = 'M';
        break;
      case 900:
        str = 'CM';
        break;
      case 500:
        str = 'D';
        break;
      case 400:
        str = 'CD';
        break;
      case 100:
        str = 'C';
        break;
      case 90:
        str = 'XC';
        break;
      case 50:
        str = 'L';
        break;
      case 40: 
        str = 'XL';
        break;
      case 10:
        str = 'X';
        break;
      case 9:
        str = 'IX';
        break;
      case 5:
        str = 'V';
        break;
      case 4:
        str = 'IV';
        break;
      default:
        str = 'I';
        break;
    }

    return str;
  }

  const list = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let ans = '';
  while(num > 0) {
    for (var i = 0; i < list.length; i++) {
      if (num >= list[i]) break;
    }

    ans += toRoman(list[i]);
    num -= list[i];
  }

  return ans;
};
// @lc code=end

