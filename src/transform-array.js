const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
    // return "'arr' parameter must be an instance of the Array!"
  }
  if (arr.length === 0) {
    return [];
  }

  let result = [];
  let doubleNext = false;
  let discardNext = false;
  let newArr = [...arr]
  newArr.forEach((element, index, array) => {
    if (doubleNext) {
      if (element) {
        result.push(element);
        result.push(element);
      }
      doubleNext = false;
    } else if (discardNext) {
      let previousResultElem = result[result.length - 1];
      if (previousResultElem === element) {
        result.pop();
      }
      discardNext = false;
    } else if (element === "--double-next") {
      doubleNext = true;
    } else if (element === "--discard-next") {
      discardNext = true;
      array[index + 1] = null;
    } else if (element === "--discard-prev") {
      let previousElem = array[index - 1];
      let previousResultElem = result[result.length - 1];
      if (previousResultElem === previousElem) {
        result.pop();
      }
      // result = result.filter(resElement => resElement !== previousElem)
    } else if (element === "--double-prev") {
      let doubleElement = array[index - 1];
      if (doubleElement) {
        result.push(doubleElement);
      }
    } else if (element === undefined) {
    } else {
      if (element) {
        result.push(element);
      }

    }
  }
  )
  return result
}

module.exports = {
  transform
};
