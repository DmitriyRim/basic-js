const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(mode = true){
    this.mode = mode;
}
abs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
encrypt(str, key) {
    if(typeof str !== 'string' || typeof key !== 'string') {
      throw new Error('Incorrect arguments!')
    }
    let phrase = str.toUpperCase();
    let keyStr = key.toUpperCase();
    let res = '';

    for (let i = 0, j = 0; i < phrase.length; i++) {
        if(j === keyStr.length) {
            j = 0;
        }
        let numberCharKey ;
        let numberCharPhrese =  this.abs.indexOf(phrase[i]);
        let newChar;

        if(numberCharPhrese !== -1) {
            numberCharKey = this.abs.indexOf(keyStr[j++]);
            newChar = numberCharPhrese + numberCharKey > 25 ? Math.abs(numberCharPhrese + numberCharKey - 26) : numberCharPhrese + numberCharKey;
            res += this.abs[newChar];
        } else {
            res += phrase[i];
        }
    }
    return this.mode ? res : res.split('').reverse().join('');
}
decrypt(str, key) {
  if(typeof str !== 'string' || typeof key !== 'string') {
    throw new Error('Incorrect arguments!')
  }
    let phrase = str.toUpperCase();
    let keyStr = key.toUpperCase();
    let res = '';

    for (let i = 0, j = 0; i < phrase.length; i++) {
        if(j === keyStr.length) {
            j = 0;
        }
        let numberCharKey ;
        let numberCharPhrese =  this.abs.indexOf(phrase[i]);
        let newChar;

        if(numberCharPhrese !== -1) {
            numberCharKey = this.abs.indexOf(keyStr[j++]);
            if(numberCharPhrese === 0 && numberCharKey === 0){
                res+=this.abs[0];
            } else {
              console.log(newChar);
                newChar = numberCharPhrese - numberCharKey + 26 < 26 ?  Math.abs(numberCharPhrese - numberCharKey + 26) : numberCharPhrese - numberCharKey;
                res += this.abs[newChar];
            }
        } else {
            res += phrase[i];
        }
    }
    return this.mode ? res : res.split('').reverse().join('');
}
}

module.exports = {
  VigenereCipheringMachine
};
