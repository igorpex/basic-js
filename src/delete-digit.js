const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numStr = n.toString();
  let numArr = numStr.split('');

  let result = numArr.reduce((maxSum, digit, indexExt, array) => {
    let sum = array.reduce((accum, element, indexInt) => {
      if (indexInt !== indexExt) return accum += element
      else return accum
    }, 0);

    if (sum > maxSum) return sum
    else return maxSum

  }, null);

  return Number(result);

}

module.exports = {
  deleteDigit
};
