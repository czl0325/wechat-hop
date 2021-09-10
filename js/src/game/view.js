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
  showGamePage() {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }
  showGameOverPage() {
    this.gameOverPage.show()
  }
}

export default new GameView()
