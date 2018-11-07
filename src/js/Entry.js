import GameSide from './GameSide';

export default class Entry {
  constructor () {
    this.$playWithCompBtn = document.querySelector('.btn-comp');
    this.$mainHeader = document.querySelector('.main-header');
    this.$entry = document.querySelector('.entry');
    this.$sidesBlock = document.querySelector('.sides');

    this.$mainHeader.style.display = 'none';

    this.$playWithCompBtn.addEventListener('click', e => this.playWithComputer(e));
  }

  playWithComputer () {    
    this.gameSide = new GameSide();

    this.$sidesBlock.style.display = 'block';
    this.$entry.style.display = 'none';
  }
}