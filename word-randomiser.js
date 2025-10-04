import { randI, randF } from './utility.js'

//
// set word to change to
// set time to change
// split letter in to array
// randomly select letter index not selected before
//    if there are more letters in second word, if out of index is chosen just do the next most letter
//    if there are less letters - select center most letter and use that
// change letter
// change inner html
// wait some time (set time above / total letters to change) until next letter again
// when changed all letters - done
//

export default class Word {
  constructor(strElement) {
    this.strElement = strElement
    this.currentWord = strElement.innerHTML.split('')
  }

  transitionWord(newWord) {
    console.log(newWord)
    this.transWord = newWord.split('')
    this.equaliseLength()
  }

  transitionLetter() {
    let index = this.getUnchangedIndex()
    if (index != null) {
      this.currentWord[index] = this.transWord[index]
      this.strElement.innerHTML = this.currentWord.join('')
    }
  }

  getUnchangedIndex() {
    let rand = randI(0, this.transWord.length - 1)
    let count = 0
    while (count < this.transWord.length) {
      if (this.transWord[rand] != this.currentWord[rand]) {
        return rand
      } else {
        rand = (rand + 1) % this.transWord.length
      }
      count++
    }
    return null
  }

  equaliseLength() {
    this.transWord = this.transWord.concat(
      Array(
        Math.max(this.transWord.length, this.currentWord.length) -
          this.transWord.length
      ).fill('')
    )
    this.currentWord = this.currentWord.concat(
      Array(
        Math.max(this.transWord.length, this.currentWord.length) -
          this.currentWord.length
      ).fill('')
    )
  }
}
