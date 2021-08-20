import scene from '../render/scene'
import Cuboid from "../block/cuboid";
import Cylinder from "../block/cylinder";
import ground from "../spirit/ground";
import human from '../spirit/human'

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks

  }
  init() {
    this.scene = scene
    this.scene.init()
    this.ground = ground
    this.ground.init()
    this.human = human
    this.human.init()
    this.render()
    this._addGround()
    this._addInitBlock()
    this._addHuman()
  }
  render() {
    this.scene.render()
    if (this.human.obj) {
      this.human.update()
    }
    requestAnimationFrame(this.render.bind(this))
  }
  show() {
    this.visiable = true
  }
  hide() {
    this.visiable = false
  }
  _addGround() {
    this.scene.instance.add(this.ground.instance)
  }
  _addInitBlock() {
    const cuboid = new Cuboid(-15, 0, 0)
    this.scene.instance.add(cuboid.instance)
    const cylinder = new Cylinder(20, 0, 0)
    this.scene.instance.add(cylinder.instance)
  }
  _addHuman() {
    this.scene.instance.add(this.human.obj)
    this.human.show()
  }
}
