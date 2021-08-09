/**
 * 游戏主函数
 */
import game from './game/game'
import * as THREE from '../libs/three'
window.THREE = THREE

export default class Main {
  constructor() {
    game.init()
  }
}
