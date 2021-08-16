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
    shadowLight.castShadow = true
    const shadowTarget = new THREE.Mesh(new THREE.PlaneGeometry(0.1, 0.1), new THREE.MeshBasicMaterial({ color: 0xf5f5f5 }))
    shadowTarget.visiable = false
    shadowTarget.name = 'shadowTarget'
    shadowLight.target = shadowTarget
    shadowLight.shadow.camera.near = 0.5
    shadowLight.shadow.camera.far = 500
    shadowLight.shadow.camera.left = -100
    shadowLight.shadow.camera.right = 100
    shadowLight.shadow.camera.top = 100
    shadowLight.shadow.camera.bottom = -100
    shadowLight.shadow.mapSize.width = 1024
    shadowLight.shadow.mapSize.height = 1024
    this.instance.shadowTarget = shadowTarget
    this.instance.shadowLight = shadowLight
    const shadowLightHelper = new THREE.DirectionalLightHelper(shadowLight, 5)
    this.instance.shadowLightHelper = shadowLightHelper
  }
}

export default new Light()
