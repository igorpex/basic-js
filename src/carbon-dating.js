const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  //validation and inadequate values
  if (typeof (sampleActivity) !== 'string') return false;
  if (!sampleActivity) return false;
  if (typeof (+sampleActivity) !== 'number') return false;
  if (!parseFloat(sampleActivity)) return false;
  if (parseFloat(sampleActivity) <= 0) return false;
  if (parseFloat(sampleActivity) > 15) return false;

  // CALCULATION
  // let k = 0.693 / HALF_LIFE_PERIOD;
  let k = Math.LN2 / HALF_LIFE_PERIOD;
  let t = Math.ceil(Math.log((MODERN_ACTIVITY) / parseFloat(sampleActivity)) / k);
  return Math.ceil(t);
}

module.exports = {
  dateSample
};
