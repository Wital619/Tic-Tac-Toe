import Game from './Game';
import GameMode from './GameMode';

export default class GameSide {
  constructor () {
    this.$mainGame = document.querySelector('.main-game');
    this.$sidesBlock = document.querySelector('.sides');

    const $sides = document.querySelectorAll('.sides__side');

    $sides.forEach($side => {
      $side.addEventListener('click', e => this.selectSide(e));
    });

    this.gameMode = new GameMode();
  }

  selectSide (e) {
    const humanSide = e.currentTarget.getAttribute('data-side');
    const botSide = humanSide === 'X' ? 'O' : 'X'; 
    const gameMode = this.gameMode.getGameMode();

    this.$mainGame.style.display = 'block';
    this.$sidesBlock.style.display = 'none';

    new Game(humanSide, botSide, gameMode);
  }
}