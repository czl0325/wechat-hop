import BaseBlock from "./base";

export default class Cylinder extends BaseBlock {
  constructor(x, y, z, width) {
    super('cuboid');
    const size = width || this.width
    const geometry = new THREE.CylinderGeometry(size/2, size/2, this.height, 320)
    const material = new THREE.MeshPhongMaterial({
      color: 0xff0000
    })
    this.instance = new THREE.Mesh(geometry, material)
    this.instance.name = 'block'
    this.instance.receiveShadow = true
    this.instance.castShadow = true
    this.instance.position.x = this.x = x
    this.instance.position.y = this.y = y
    this.instance.position.z = this.z = z
  }

}
