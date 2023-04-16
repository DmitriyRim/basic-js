const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
}

const newArr = [];

for(let i = 0; i < arr.length; i++) {
    if(arr[i - 1] === '--discard-next' 
    || arr[i + 1] === '--discard-prev'
    || arr[i] === '--discard-prev'
    || arr[i] === '--discard-next'
    || (arr[arr.length - 1] === '--discard-next' && arr.length - 1 === i)
    || (arr[arr.length - 1] === '--double-next' && arr.length - 1 === i)
    || (arr[0] === '--discard-prev' && i === 0)
    || (arr[0] === '--double-prev' && i === 0)
    ) {
        continue;
    }
    if(arr[i] === '--double-next') {
        newArr.push(arr[i + 1]);
        continue;
    }
    if(arr[i] === '--double-prev' && arr[i - 2] !== '--discard-next') {
        newArr.push(arr[i - 1]);
        continue;
    }
    if(arr[i] === '--double-prev' ) continue;
    newArr.push(arr[i]);
}
return newArr;
}

module.exports = {
  transform
};
