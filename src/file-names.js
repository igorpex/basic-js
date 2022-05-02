const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k)),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let stackDict = {};
  let result = [];
  let len = names.length;

  for (let i = 0; i < len; i++) {
    let fileName = names[i];
    // let index = stackDict[fileName];
    // if non name yet
    if (!stackDict[fileName]) {
      // check if name already in new names list
      if (result.includes(fileName)) {
        // then add index to new word, add to list, update index
        stackDict[fileName] = 1
        let newName = `${fileName}(${stackDict[fileName]})`
        stackDict[fileName] += 1;
        result.push(newName);
        continue
      } else {
        stackDict[fileName] = 1
        result.push(fileName);
        continue
      }
    } else {
      let newName = `${fileName}(${stackDict[fileName]})`
      stackDict[fileName] += 1;
      result.push(newName);
      continue
    }
  }
  return result
}

module.exports = {
  renameFiles
};
