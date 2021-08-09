import Event from "../utils/event";

class GameModel {
  constructor() {
    this._stage = ''
    this.stageChanged = new Event(this)
  }

  getStage() {
    return this._stage
  }

  setStage(stage) {
    this._stage = stage
    this.stageChanged.notify({
      stage
    })
  }
}

export default new GameModel()
