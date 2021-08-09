import scene from '../render/scene'

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks

  }
  init() {
    this.scene = scene
    this.scene.init()
    this.render()
  }
  render() {
    this.scene.render()
    requestAnimationFrame(this.render.bind(this))
  }
  show() {
    this.visiable = true
  }
  hide() {
    this.visiable = false
  }
}
