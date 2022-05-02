const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // count each character in s1
  let s1Counts = {};
  for (let char of s1) {
    console.log("char:", char);
    if (s1Counts[char]) {
      s1Counts[char]++
      console.log("s1Counts[char]:", s1Counts[char]);
    } else s1Counts[char] = 1;
    console.log("s1Counts[char]:", s1Counts[char]);
  }
  // count each character in s2
  let s2Counts = {};
  for (let char of s2) {
    if (s2Counts[char]) {
      s2Counts[char]++
    } else s2Counts[char] = 1;
  }
  // sum minimums
  let sum = 0;
  for (let elem in s1Counts) {
    if (s1Counts[elem] && s2Counts[elem]) {
      sum += Math.min(s1Counts[elem], s2Counts[elem])
    }
  }
  return sum
}

module.exports = {
  getCommonCharacterCount
};

console.log(getCommonCharacterCount('aabcc', 'adcaa'));// 3);