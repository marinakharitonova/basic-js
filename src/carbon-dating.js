const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LN_OF_TWO = 0.639;

module.exports = function dateSample(sampleActivity) {
  if (sampleActivity && typeof sampleActivity === 'string' && sampleActivity > 0 && sampleActivity <= 15) {
    let k = LN_OF_TWO / HALF_LIFE_PERIOD;
    let t = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k;
    return Math.ceil(t);
  } else return false;

};
