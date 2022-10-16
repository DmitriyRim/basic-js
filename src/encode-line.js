const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let currentValue = '';
  let count;
  let out = '';
  for(let i = 0; i < str.length; i++){
      if(currentValue !== str[i]){
          out += (count > 1 ? count : '') + currentValue;
          currentValue = str[i];
          count = 0;
      }
      if(currentValue === str[i]) count++;
  }
  out += (count > 1 ? count : '') + currentValue; 
  return out;
}

module.exports = {
  encodeLine
};
