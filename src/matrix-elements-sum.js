const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let triggers = {};
  matrix[0].forEach((element, index) => {
    triggers[index] = 1;
  })

  let result = 0;
  matrix.forEach((array) => {
    array.forEach((element, index) => {
      if (triggers[index] === 1) {
        if (element === 0) {
          triggers[index] = 0
        } else {
          result += element;
        }
      }
    })
  })
  return result
}

module.exports = {
  getMatrixElementsSum
};
