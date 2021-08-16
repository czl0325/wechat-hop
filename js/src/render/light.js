class Light {
  constructor() {
    this.instance = {}
  }
  init() {
    // 环境光
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    this.instance.ambientLight = ambientLight
    // 点光源
    const shadowLight = new THREE.DirectionalLight(0xffffff, 0.3)
    shadowLight.position.set(10, 30, 20)
    this.shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }))
    this.shadowTarget.visiable = false
    shadowLight.target = this.shadowTarget
    this.instance.shadowLight = shadowLight
    const shadowLightHelper = new THREE.DirectionalLightHelper(shadowLight, 5)
    this.instance.shadowLightHelper = shadowLightHelper
  }
}

export default new Light()
