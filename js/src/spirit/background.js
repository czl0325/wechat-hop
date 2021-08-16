import sceneConf from '../conf/scene-conf'

class Background {
  constructor(props) {

  }
  init() {
    const geometry = new THREE.PlaneGeometry(sceneConf.frustumSize * 2, (sceneConf.frustumSize * 2) * window.innerHeight / window.innerWidth )
    const material = new THREE.MeshBasicMaterial({
      color: 0xd7dbe6,
      opacity: 1,
      transparent: true
    })
    this.instance = new THREE.Mesh(geometry, material)
  }
}

export default new Background()
