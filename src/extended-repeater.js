const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let {repeatTimes = 0, separator = '+', addition = '', additionRepeatTimes = 0, additionSeparator = '|'} = options;
  let result = '';
  if (repeatTimes) {
    for (let i = 1; i <= repeatTimes; i++) {
      result += `${String(str)}`;
      for (let j = 1; j <= additionRepeatTimes; j++) {
        result += `${String(addition)}`;
        if (j !== additionRepeatTimes) {
          result += additionSeparator;
        }
      }
      if (i !== repeatTimes) result += separator;
    }
  } else {
    result = `${String(str)}${String(addition)}`;
  }
  return result;
};
  