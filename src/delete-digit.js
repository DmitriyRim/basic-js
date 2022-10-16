const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('');
  let numbers = [];
  let maxNumber = 0;
  for (let i = 0; i < arr.length; i++) {
      let newArr = [].concat(arr)
      newArr.splice(i, 1);
      numbers.push(newArr.join(''));
  }
  numbers.forEach(item => {
      if(maxNumber < item) maxNumber = item;
  });
  return +maxNumber;
}

module.exports = {
  deleteDigit
};
