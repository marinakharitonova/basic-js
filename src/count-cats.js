const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  // remove line with error and write your code here
  let count = 0;
  for (let array of matrix) {
    for (let elem of array) {
      if (elem === '^^') {
        count += 1;
      }
    }
  }
  return count;
};
