const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if(!(date instanceof Date)) {
    throw new Error('Invalid date!')
  }
  let monthNumber = date.getMonth();
  let res;
  if (monthNumber == 0 || monthNumber === 1 || monthNumber === 11) {
      res = 'winter';
  }
  if (monthNumber > 1 && monthNumber < 5) {
      res = 'spring';
  }
  if (monthNumber > 4 && monthNumber < 8) {
      res = 'summer';
  }
  if (monthNumber > 7 && monthNumber < 11) {
      res = 'fall';
  }
  console.log(monthNumber)
return res;
}

module.exports = {
  getSeason
};
