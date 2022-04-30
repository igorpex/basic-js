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
  encrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let messageArr = message.split('');
    let keyArr = key.split('').map(element => element.toUpperCase());
    if (!this.direct) { messageArr.reverse() };

    messageArr = messageArr
      .filter(item => { if (item !== undefined) return item })
      .map(item => item.toUpperCase());

    let keyCounter = 0;
    let encrypted = messageArr
      .map((element, index, array) => {
        if (this.alphabetArr.includes(element)) {
          let indexRotated = keyCounter % key.length;
          let offsetNumber = this.alphabetArr.indexOf(keyArr[indexRotated]);
          let newIndex = (this.alphabetArr.indexOf(element) + offsetNumber) % 26;
          let newLetter = this.alphabetArr[newIndex];
          keyCounter++;
          return newLetter
        } else {
          return element
        }
      }
      )
      .join('');
    return encrypted;
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error("Incorrect arguments!");
    let messageArr = message.split('');
    let keyArr = key.split('').map(element => element.toUpperCase());
    if (!this.direct) { messageArr.reverse() };

    messageArr = messageArr
      .filter(item => { if (item !== undefined) return item })
      .map(item => item.toUpperCase());

    let keyCounter = 0;
    let decrypted = messageArr
      .map((element, index, array) => {
        if (this.alphabetArr.includes(element)) {
          let indexRotated = keyCounter % key.length;
          let offsetNumber = this.alphabetArr.indexOf(keyArr[indexRotated]);
          let newIndex = this.alphabetArr.indexOf(element) - offsetNumber;
          if (newIndex < 0) newIndex += 26;
          newIndex = newIndex % 26;
          let newLetter = this.alphabetArr[newIndex];
          keyCounter++;
          return newLetter
        } else {
          return element
        }
      }
      )
      .join('');
    return decrypted;
  }

  constructor(direct = true) {
    this.direct = direct;
    this.alfabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.alphabetArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
