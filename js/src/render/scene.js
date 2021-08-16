import camera from "./camera";
import light from "./light";
import background from "../spirit/background";

class Scene {
  constructor() {
  }
  init() {
    this.instance = new THREE.Scene()
    this.renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      preserveDrawingBuffer: true
    })
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFShadowMap
    this.camera = camera
    this.camera.init()
    this.light = light
    this.light.init()
    this.instance.add(this.camera.instance)
    this.axesHelper = new THREE.AxesHelper( 100 )
    this.instance.add(this.axesHelper)
    for (let lightType in this.light.instance) {
      this.instance.add(this.light.instance[lightType])
    }
    this.background = background
    this.background.init()
    this.background.instance.position.z = -100
    this.camera.instance.add(this.background.instance)
  }
  render() {
    this.renderer.render(this.instance, this.camera.instance)
  }
}

export default new Scene()
