import { customAnimation } from '../../libs/animation'
import blockConf from '../conf/block-conf.js'

class Human {
  constructor () {
    this.status = 'stop'
    this.scale = 1
  }

  init () {
    this.loader = new THREE.TextureLoader()
    this.obj = new THREE.Object3D()
    this.obj.name = 'human'
    this.obj.position.x = -15
    this.obj.position.y = 30
    this.obj.position.z = 0
    const headRadius = 2.1 * 0.72

    const texture1 = this.loader.load('/game/assets/images/head.png')
    texture1.minFilter = THREE.LinearFilter
    this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius * 1.4), new THREE.MeshBasicMaterial({ map: texture1 }))
    this.head.position.y = 7.56
    this.head.position.x = 0
    this.head.position.z = 0
    this.head.castShadow = true
    this.obj.add(this.head)

    // this.head = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new MeshPhongMaterial({ color: 0xffffff }))

    const texture2 = this.loader.load('/game/assets/images/bottom.png')
    texture2.minFilter = THREE.LinearFilter
    this.body = new THREE.Mesh(new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 4.5 * headRadius, 20), new THREE.MeshBasicMaterial({ map: texture2 }))
    this.body.castShadow = true
    this.obj.add(this.body)
  }

  show() {
    customAnimation.to(this.obj.position, {
      x: -15, y: 6, z: 0
    }, 2, { mode: 'Bounce.easeOut'})
  }

  update() {
    this.head.rotation.y += 0.03
    if (this.status === 'shrink') {
      this._shrink()
    }
  }
  stop() {
    this.status = 'stop'
    this._reset()
  }
  _reset() {
    this.scale = 1
    this.body.scale.x = this.scale
    this.body.scale.y = this.scale
    this.body.scale.z = this.scale
    this.head.position.y = 7.56
    this.head.position.x = 0
    this.head.position.z = 0
    this.obj.position.x = -15
    this.obj.position.y = 6
    this.obj.position.z = 0
  }
  _shrink() {
    const DELTA_SCALE = 0.005
    const HORIZON_DELTA_SCALE = 0.007
    const HEAD_DELTA = 0.03
    const MIN_SCALE = 0.55
    this.scale -= DELTA_SCALE
    this.scale = Math.max(this.scale, MIN_SCALE)
    if (this.scale <= MIN_SCALE) {
      return
    }
    this.body.scale.y = this.scale
    this.body.scale.x += HORIZON_DELTA_SCALE
    this.body.scale.z += HORIZON_DELTA_SCALE
    this.head.position.y -= HEAD_DELTA
    // const bottleDeltaY = HEAD_DELTA / 2
    // const deltaY = blockConf.height * HEAD_DELTA / 2
    // this.obj.position.y -= (bottleDeltaY + deltaY * 2)
  }
}

export default new Human()
