import GameSide from './game-side';
import SocketPlayer from './socket-player';
import SocketGame from './socket-game';
import {hide, show, replacePlayerSide} from '../utils';

export default class Entry {
  constructor () {
    this.$playWithHumanBtn = document.querySelector('.btn-create');
    this.$btnJoin = document.querySelector('.btn-join');
    this.$playWithCompBtn = document.querySelector('.btn-comp');
    this.$entry = document.querySelector('.entry');

    this.$playWithHumanBtn.disabled = true;
    this.$btnJoin.disabled = true;
    
    this.$firstPlayerName = document.querySelector('.entry__input--first-player');
    this.$secondPlayerName = document.querySelector('.entry__input--second-player');
    this.$inputRoomId = document.querySelector('.entry__input--room-id');

    // this.socket = io.connect('http://localhost:5000');
    this.game = null;
    this.player = null;
    this.playerX = 'X';
    this.playerO = 'O';

    this.initialize();
    // this.initSocketEvents();
  }

  initialize () {
    this.playWithComputer = this.playWithComputer.bind(this);
    this.playWithHuman = this.playWithHuman.bind(this);
    this.joinInCreatedGame = this.joinInCreatedGame.bind(this);
    
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

  playWithHuman () {
    const name = this.$firstPlayerName.value || 'div';

    if (!name) {
      alert('Please enter your name.');

      return;
    }

    this.socket.emit('createGame', { name });
    this.player = new SocketPlayer(name, this.playerX);

    hide(this.$entry);
  }

  joinInCreatedGame () {
    const name = this.$secondPlayerName.value || 'ddf';
    const roomID = this.$inputRoomId.value;

    if (!name || !roomID) {
      alert('Please enter your name and game ID.');
    
      return;
    }

    this.socket.emit('joinGame', { name, room: roomID });

    this.player = new SocketPlayer(name, this.playerO);
    hide(this.$entry);
  }

  initSocketEvents () {
    this.socket.on('newGame', data => {
      const infoMessage = `Hello, ${data.name}.
        Please ask your friend to enter Game ID: ${data.room}.
        Waiting for player 2...`;

      const params = {
        roomId: data.room,
        player: this.player,
        socket: this.socket,
        isGameStarted: false
      };

      this.game = new SocketGame(params);
      this.game.setInfoText(infoMessage);
    });
    
    this.socket.on('player1', () => {
      this.game.setInfoText('Your turn');
      this.game.isGameStarted = true;
      this.player.setCurrentTurn(true);
    });
    
    this.socket.on('player2', data => {
      const params = {
        roomId: data.room,
        player: this.player,
        socket: this.socket,
        isGameStarted: true
      };

      this.game = new SocketGame(params);

      this.game.setInfoText('Waiting for the opponent');
      this.player.setCurrentTurn(false);
    });
    
    this.socket.on('turnPlayed', data => {
      const opponentSide = replacePlayerSide(this.player.side);

      this.game.makeMove(data.square, opponentSide);
      this.game.setInfoText('Your turn');
      this.player.setCurrentTurn(true);
    });
    
    this.socket.on('gameEnd', data => {
      this.game.declareWinner(data.result);
    });
    
    this.socket.on('err', data => {
      alert(data.message);
      show(this.$entry);
    });
  }
}