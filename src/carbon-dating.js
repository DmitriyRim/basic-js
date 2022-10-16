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
  let numberSampleActivity = parseFloat(sampleActivity);

  if(typeof sampleActivity !== 'string') return false;
  if(isNaN(numberSampleActivity)) return false;
  if(!isFinite(numberSampleActivity)) return false;
  if(numberSampleActivity === 0 || numberSampleActivity < 0 || numberSampleActivity > 15) return false;


  let years = Math.log(MODERN_ACTIVITY / numberSampleActivity) / (0.693 / HALF_LIFE_PERIOD);
  return Math.ceil(years);
}

module.exports = {
  dateSample
};
