const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  // remove line with error and write your code here
  const turns = Math.pow(2, disksNumber) - 1;
  return {
    turns  : turns,
    seconds: Math.floor(turns * 3600 / turnsSpeed)
  }
};
