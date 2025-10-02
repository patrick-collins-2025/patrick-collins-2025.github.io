export default class RGB {
  randVariable = 10
  constructor(r, g, b) {
    ;(this.r = { color: r, increasing: true }),
      (this.g = { color: g, increasing: true }),
      (this.b = { color: b, increasing: true })
  }

  getColorString() {
    return `${this.r.color}, ${this.b.color}, ${this.g.color}`
  }

  changeValues() {
    let array = [this.r, this.b, this.g]
    array.forEach((item) => this.changeColor(item))
  }

  changeColor(color) {
    if (color.increasing) {
      color.color += Math.floor(Math.random() * this.randVariable)
      if (color.color >= 255) {
        color.increasing = false
      }
    } else {
      color.color -= Math.floor(Math.random() * this.randVariable)
      if (color.color <= 0) {
        color.increasing = true
      }
    }
  }
}
