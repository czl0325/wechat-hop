/**
 * 游戏主函数
 */
import * as THREE from '../libs/three'
window.THREE = THREE

import game from './game/game'

export default class Main {
  constructor() {
    game.init()
  }
}
