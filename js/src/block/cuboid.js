import BaseBlock from "./base";

export default class Cuboid extends BaseBlock {
  constructor(x, y, z, width) {
    super('cuboid');
    const size = width || this.width
    const geometry = new THREE.BoxGeometry(size, this.height, size)
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ffff
    })
    this.instance = new THREE.Mesh(geometry, material)
    this.instance.name = 'block'
    this.instance.position.x = this.x = x
    this.instance.position.y = this.y = y
    this.instance.position.z = this.z = z
  }

}
