import scene from '../render/scene'
import Cuboid from "../block/cuboid";
import Cylinder from "../block/cylinder";
import ground from "../spirit/ground";

export default class GamePage {
  constructor(callbacks) {
    this.callbacks = callbacks

  }
  init() {
    this.scene = scene
    this.scene.init()
    const cuboid = new Cuboid(-15, 0, 0)
    this.scene.instance.add(cuboid.instance)
    const cylinder = new Cylinder(20, 0, 0)
    this.scene.instance.add(cylinder.instance)
    this.ground = ground
    this.ground.init()
    this.render()
    this._addGround()
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
  _addGround() {
    this.scene.instance.add(this.ground.instance)
  }
}
