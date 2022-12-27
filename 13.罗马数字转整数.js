/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const n = s.length;
  var list = ['M', 'D', 'C', 'L', 'X', 'V', 'I'];
  const toInt = (char) => {
    let int;
    switch (char) {
      case 'M':
        int = 1000;
        break;
      case 'CM':
        int = 900;
        break;
      case 'D':
        int = 500;
        break;    
      case 'CD':
        int = 400;
        break;
      case 'C':
        int = 100;
        break;
      case 'XC':
        int = 90;
        break;
      case 'L':
        int = 50;
        break;
      case 'XL':
        int = 40;
        break;
      case 'X':
        int = 10;
        break;
      case 'IX':
        int = 9;
        break;
      case 'V':
        int = 5;
        break;
      case 'IV':
        int = 4;
        break;
      default:
        int = 1;
        break;
    }
    return int;
  }

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (i != n-1 && list.indexOf(s[i]) > list.indexOf(s[i+1])) {
      ans += toInt(s.slice(i, i+2));
      i += 1;
    } else {
      ans += toInt(s[i]);
    }
  }

  return ans;
};
// @lc code=end

