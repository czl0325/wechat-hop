import blockConf from '../conf/block-conf'

export default class BaseBlock {
  constructor(type) {
    this.type = type  // cuboid | cylinder
    this.width = blockConf.size
    this.height = blockConf.height
  }
}
