const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainArr: [],
  chain: '',

  getLength() {
    return this.chainArr.getLength
  },
  addLink(value) {
    if (value !== undefined) {
      this.chainArr.push(`( ${value} )`);
    } else {
      this.chainArr.push(`( )`);
    }
    return this
  },
  removeLink(position) {
    if (!Number.isInteger(position)) {
      this.chainArr = [];
      this.chain = '';
      throw new Error("You can't remove incorrect link!");
      return this
    }
    if (position <= 0 || position > this.chainArr.length) {
      this.chainArr = [];
      this.chain = '';
      throw new Error("You can't remove incorrect link!")
      return this
    }
    this.chainArr.splice(position - 1, 1);
    return this
  },
  reverseChain() {
    this.chainArr = this.chainArr.reverse();
    return this
  },
  finishChain() {
    let result = this.chainArr.join("~~");
    this.chainArr = [];
    this.chain = '';
    return result
  }
};

module.exports = {
  chainMaker
};
