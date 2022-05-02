const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let result = '';
  let count = 1;
  let prevSymbol = '';
  let len = str.length;

  for (let i = 0; i < len; i++) {
    let symbol = str[i];
    //count repeating symbols
    if (symbol === prevSymbol) {
      count++;
      prevSymbol = symbol;
    } else { // if it is a new symbol
      // if it was previous symbol before, need to record it
      if (prevSymbol && count === 1) {
        result += prevSymbol;
      }
      else if (prevSymbol && count > 1) {
        result += count;
        result += prevSymbol;
      }
      count = 1;
      prevSymbol = symbol;
    }

    // if it was the last symbol, need to finalize it
    if (i === len - 1) {
      if (prevSymbol && count === 1) {
        result += prevSymbol;
      }
      else if (prevSymbol && count > 1) {
        result += count;
        result += prevSymbol;
      }
    }
  }
  return result
}

module.exports = {
  encodeLine
};
