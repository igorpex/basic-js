const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let exceptions = [];
  let cleanSortedArr = arr.filter((element, index) => {
    if (element === -1) {
      exceptions.push(index);
      return false;
    }
    return true
  })
    .sort((a, b) => a - b);
  let resultArr = cleanSortedArr;
  for (let position of exceptions) {
    resultArr.splice(position, 0, -1);
  }
  return resultArr
}

module.exports = {
  sortByHeight
};
