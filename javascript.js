import RGB from './rgb-class.js'

const nameElement = document.getElementById('my-name')

console.log('hi')

let color1 = new RGB(255, 126, 0)
let color2 = new RGB(0, 126, 126)
changeNameColor(nameElement, color1, color2, 10)

function changeNameColor(element, color1, color2, time) {
  // console.log(color1.getColorString())
  color1.changeValues()
  color2.changeValues()
  nameElement.style.backgroundImage = `linear-gradient(to right, rgb(${color1.getColorString()}), rgb(${color2.getColorString()})`
  setTimeout(changeNameColor, time, element, color1, color2, time)
}
