export default class SocketPlayer {
  constructor (name, side) {
    this.name = name;
    this.opponentName = null;
    this.side = side;
    this.currentTurn = true;
    this.playsArr = 0;
    this.score = 0;
  }

  setOpponentName (name) {
    this.opponentName = name;
  }

  getOpponentName () {
    return this.opponentName;
  }

  setCurrentTurn (turn) {
    this.currentTurn = turn;
  }

  getCurrentTurn () {
    return this.currentTurn;
  }
}