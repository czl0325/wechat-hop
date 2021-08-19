import { MeshPhongMaterial } from '../../libs/three'

class Human {
  constructor () {
  }

  init () {
    this.loader = new THREE.TextureLoader()
    this.obj = new THREE.Object3D()
    this.obj.name = 'human'
    this.obj.position.x = -15
    this.obj.position.y = 30
    this.obj.position.z = 0
    const headRadius = 30 // 2.1 * 0.72

    const texture1 = this.loader.load('/game/assets/images/head.png')
    texture1.minFilter = THREE.LinearFilter
    this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius * 1.4, new THREE.MeshBasicMaterial({ map: texture1 })))
    this.head.position.y = 7.56
    this.head.position.x = 0
    this.head.position.z = 0
    this.head.castShadow = true
    this.obj.add(this.head)

    // this.head = new THREE.Mesh(new THREE.BoxGeometry(20, 10, 20), new MeshPhongMaterial({ color: 0xffffff }))

    // const texture2 = this.loader.load('../../assets/images/bottom.png')
    // this.bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.88 * headRadius, 1.27 * headRadius, 2.68 * headRadius, 20), new THREE.MeshBasicMaterial({ map: texture2 }))
    // this.obj.add(this.bottom)
  }
}

export default new Human()
