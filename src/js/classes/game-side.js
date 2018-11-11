import Game from './game';
import GameMode from './game-mode';
import {hide, show} from '../utils';

export default class GameSide {
  constructor (isItChangingMode = false) {
    this.$sidesParent = document.querySelector('.sides');
    this.$sides = document.querySelectorAll('.sides__side');
    
    show(this.$sidesParent);
    
    if (!isItChangingMode) {
      this.humanSide = 'X';
      this.botSide = 'O';
      this.selectSide = this.selectSide.bind(this);
      this.gameMode = new GameMode();
      
      this.$sides.forEach($side => $side.addEventListener('click', this.selectSide));
    }
  }

  selectSide (e) {
    e.stopPropagation();

    const selectedSide = e.currentTarget.getAttribute('data-side');
    const humanSide = selectedSide;
    const botSide = selectedSide === 'X' ? 'O' : 'X';
    const gameMode = this.gameMode.getGameMode();

    new Game(humanSide, botSide, gameMode);

    this.cleanBeforeDestroy();
  }

  selectSideByPromise () {
    return new Promise(resolve => {
      this.$sides.forEach($side => {
        $side.addEventListener('click', e => {
          const selectedSide = e.currentTarget.getAttribute('data-side');
          const humanSide = selectedSide;
          const botSide = selectedSide === 'X' ? 'O' : 'X';

          hide(this.$sidesParent);
          resolve({ humanSide, botSide });      
        });
      });
    });
  }

  cleanBeforeDestroy () {
    hide(this.$sidesParent);

    this.$sides.forEach($side => $side.removeEventListener('click', this.selectSide));
  }
}