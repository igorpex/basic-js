const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!members) return false;
  if (!Array.isArray(members)) return false;

  let stringMembers = members.filter(member => typeof (member) === 'string');
  if (stringMembers.length === 0) { return false };

  let result = stringMembers
    .map(member => member.trim()) // clean whitespaces
    .map(member => member[0]) // get first letter
    .map(letter => letter.toUpperCase()) //uppercase for right sort
    .sort() // sort
    .join(""); //get string from array
  return result
}

module.exports = {
  createDreamTeam
};
