export default class GameMode {
  constructor () {
    this.$gameModeInputs = document.querySelectorAll('.game-mode__input');
    this.gameMode = 'same';

    this.$gameModeInputs.forEach(input => {
      input.addEventListener('change', e => this.selectGameMode(e));
    });
  }

  selectGameMode (e) {
    this.gameMode = e.target.value;
  }

  getGameMode () {
    return this.gameMode;
  }
}