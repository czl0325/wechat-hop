class Light {
  constructor() {

  }
  init() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8) // 环境光
    this.ambientLight = ambientLight
  }
}

export default new Light()
