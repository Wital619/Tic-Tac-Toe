import GameSide from './game-side';
import {hide, show} from '../utils';

export default class Entry {
  constructor () {
    this.$playWithHumanBtn = document.querySelector('.btn-create');
    this.$btnJoin = document.querySelector('.btn-join');
    this.$playWithCompBtn = document.querySelector('.btn-comp');
    this.$entry = document.querySelector('.entry');
    
    this.$firstPlayerName = document.querySelector('.entry__input--first-player');
    this.$secondPlayerName = document.querySelector('.entry__input--second-player');
    this.$inputRoomId = document.querySelector('.entry__input--room-id');

    this.playWithComputer = this.playWithComputer.bind(this);
    this.playWithHuman = this.playWithHuman.bind(this);
    this.joinInCreatedGame = this.joinInCreatedGame.bind(this);

    this.initialize();
  }

  initialize () {
    show(this.$entry);

    this.$playWithCompBtn.addEventListener('click', this.playWithComputer);
    this.$playWithHumanBtn.addEventListener('click', this.playWithHuman);
    this.$btnJoin.addEventListener('click', this.joinInCreatedGame);
  }

  playWithComputer () {
    hide(this.$entry);
    this.$playWithCompBtn.removeEventListener('click', this.playWithComputer);

    new GameSide(false);
  }

  playWithHuman () {}

  joinInCreatedGame () {}
}