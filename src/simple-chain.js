const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink(value = '') {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position % 1 !== 0 || this.arr[position - 1] === undefined) {
      this.arr = [];
      throw new Error('wrong position!')
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('~~');
    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
