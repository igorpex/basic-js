const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options) {
    return str
  }

  let repeatTimes = 0;
  if (options.repeatTimes > 0) {
    repeatTimes = options.repeatTimes;
  }

  let separator = "+";
  if (options['separator'] !== undefined) {
    separator = `${options['separator']}`;
  }
  let addition = "";

  if (options['addition'] !== undefined) {
    addition = `${options['addition']}`
  }

  let additionRepeatTimes = 0;
  if (options['additionRepeatTimes'] !== undefined) {
    additionRepeatTimes = options['additionRepeatTimes']
  }

  let additionSeparator = '|';
  if (options['additionSeparator'] !== undefined) {
    additionSeparator = `${options['additionSeparator']}`;
  }

  let additionsArr = [];
  if (additionRepeatTimes > 0) {
    for (let j = 0; j < additionRepeatTimes; j++) {
      additionsArr.push(addition);
    }
  } else {
    additionsArr.push(addition);
  }

  let additions = '';
  additions = additionsArr.join(additionSeparator);

  let message = str + additions

  let resultArr = [];
  if (repeatTimes > 0) {
    for (let i = 0; i < repeatTimes; i++) {
      resultArr.push(message);
    }
  } else {
    resultArr.push(message);
  }

  let result = resultArr.join(separator);
  return result
}



module.exports = {
  repeater
};
