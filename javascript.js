import RGB from './rgb-class.js'
import Word from './word-randomiser.js'
import { randF, randI } from './utility.js'

const helloTranslations = [
  'hello',
  'hola',
  'bonjour',
  'hallo',
  'ciao',
  'ola',
  'namaste',
  'salaam',
  'privet',
  'merhaba',
  'konnichiwa',
  'ni hao',
  'anyoung',
  'shalom',
  'jambo',
]

const worldTranslations = [
  'world',
  'mundo',
  'monde',
  'welt',
  'mondo',
  'mundo',
  'vishva',
  'alam',
  'mir',
  'dunya',
  'sekai',
  'shijie',
  'segye',
  'olam',
  'ulimwengu',
]

const nameElement = document.getElementById('my-name')

let color1 = new RGB(255, 126, 0)
let color2 = new RGB(0, 126, 126)
changeElementColor(nameElement, color1, color2, 10)

let helloWord = new Word(document.getElementById('hello'))
let worldWord = new Word(document.getElementById('world'))
let helloIndex = randI(1, helloTranslations.length - 1)
let worldIndex = randI(1, worldTranslations.length - 1)
changeWord()

setInterval(changeWord, 2500)

function changeWord() {
  helloIndex = (helloIndex + randI(0, 7)) % helloTranslations.length
  worldIndex = (worldIndex + randI(0, 7)) % worldTranslations.length
  helloWord.transitionWord(helloTranslations[helloIndex])
  worldWord.transitionWord(worldTranslations[worldIndex])
  for (let i = 0; i < helloWord.transWord.length; i++) {
    setTimeout(() => helloWord.transitionLetter(), 100 * (i + 1))
  }
  for (let i = 0; i < worldWord.transWord.length; i++) {
    setTimeout(() => worldWord.transitionLetter(), 100 * (i + 1))
  }
}

function changeElementColor(element, color1, color2, time) {
  color1.changeValues()
  color2.changeValues()
  nameElement.style.backgroundImage = `linear-gradient(to right, rgb(${color1.getColorString()}), rgb(${color2.getColorString()})`
  setTimeout(changeElementColor, time, element, color1, color2, time)
}
