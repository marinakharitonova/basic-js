const CustomError = require("../extensions/custom-error");

const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }

  reverse(str) {
    return str.split('').reverse().join('')
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('no arguments!')
    }
    let upperKey = key.toUpperCase()
    let upperMessage = message.toUpperCase()
    let result = ''
    let keyIndex = 0

    for (let i = 0; i < upperMessage.length; i++) {
      if (!/[A-Za-z]/.test(upperMessage[i])) {
        result += upperMessage[i]
      } else {
        result += ALPHABET[(ALPHABET.indexOf(upperMessage[i]) + ALPHABET.indexOf(upperKey[keyIndex])) % 26]
        keyIndex++
        if (keyIndex === upperKey.length) keyIndex = 0
      }

    }
    if (!this.type) result = this.reverse(result)
    return result
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('no arguments!')
    }
    let upperKey = key.toUpperCase()
    let upperMessage = message.toUpperCase()
    let result = ''
    let keyIndex = 0;

    for (let i = 0; i < upperMessage.length; i++) {
      if (!/[A-Za-z]/.test(upperMessage[i])) {
        result += upperMessage[i]
      } else {
        result += ALPHABET[(ALPHABET.indexOf(upperMessage[i]) - ALPHABET.indexOf(upperKey[keyIndex]) + 26) % 26]
        keyIndex++
        if (keyIndex === upperKey.length) keyIndex = 0
      }

    }
    if (!this.type) result = this.reverse(result)
    return result
  }
}

module.exports = VigenereCipheringMachine;
