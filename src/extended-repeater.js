const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator ? options.separator : '+';
  let addition = (options.addition || typeof options.addition === 'boolean' || options.addition === null? String(options.addition) : '');
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|';

  let newString = String(str) + addition + (additionSeparator + addition).repeat(options.additionRepeatTimes > 1 ? options.additionRepeatTimes - 1 : '');
  let out = newString + (options.repeatTimes > 1 ? (separator + newString).repeat(options.repeatTimes -1) : '');
  return out;
}

module.exports = {
  repeater
};
