import {hide, show} from '../utils';

export default class GameMode {
  constructor () {
    this.$modes = document.querySelector('.modes');
    this.$modesInputs = document.querySelectorAll('.modes__input');

    this.selectGameMode = this.selectGameMode.bind(this);
    this.initialize();

    this.gameMode = 'same';
  }

  initialize () {
    show(this.$modes);

    this.$modesInputs.forEach(input => input.addEventListener('change', this.selectGameMode));
  }

  selectGameMode (e) {
    this.gameMode = e.target.value;
  }

  cleanBeforeDestroy () {
    hide(this.$modes);

    this.$modesInputs.forEach(input => input.addEventListener('change', this.selectGameMode));
  }

  getGameMode () {
    this.cleanBeforeDestroy();

    return this.gameMode;
  }
}