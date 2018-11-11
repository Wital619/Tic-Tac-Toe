import GameWithComputer from './game-with-computer';
import {hide, show} from '../utils';

export default class Entry {
  constructor () {
    this.$playWithCompBtn = document.querySelector('.btn-comp');
    this.$entry = document.querySelector('.entry');

    show(this.$entry);

    this.$playWithCompBtn.addEventListener('click', e => this.playWithComputer(e));
  }

  playWithComputer () {    
    new GameWithComputer();

    hide(this.$entry);
  }
}