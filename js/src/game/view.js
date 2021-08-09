import Event from "../utils/event";
import GamePage from "../pages/game-page";
import GameOverPage from "../pages/game-over-page";

class GameView {
  constructor() {
  }

  initGamePage(callbacks) {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }
  initGameOverPage(callbacks) {
    this.gameOverPage = new GameOverPage(callbacks)
    this.gameOverPage.init()
  }
}

export default new GameView()
