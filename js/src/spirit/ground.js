class Ground {
  constructor() {

  }
  init() {
    const groundGeometry = new THREE.PlaneGeometry(200, 200)
    const material = new THREE.ShadowMaterial({
      transparent: true,
      color: 0x000000,
      opacity: 0.3
    })
    this.instance = new THREE.Mesh(groundGeometry, material)
    this.instance.receiveShadow = true
    this.instance.rotation.x = -Math.PI / 2
    this.instance.position.y = -2.7
  }
}

export default new Ground()
