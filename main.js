/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/classes/entry.js":
/*!*********************************!*\
  !*** ./src/js/classes/entry.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entry; });\n/* harmony import */ var _game_side__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game-side */ \"./src/js/classes/game-side.js\");\n\n\nclass Entry {\n  constructor () {\n    this.$playWithCompBtn = document.querySelector('.btn-comp');\n    this.$mainHeader = document.querySelector('.main-header');\n    this.$entry = document.querySelector('.entry');\n    this.$sidesBlock = document.querySelector('.sides');\n\n    this.$mainHeader.style.display = 'none';\n\n    this.$playWithCompBtn.addEventListener('click', e => this.playWithComputer(e));\n  }\n\n  playWithComputer () {    \n    this.gameSide = new _game_side__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    this.$sidesBlock.style.display = 'block';\n    this.$entry.style.display = 'none';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9lbnRyeS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9jbGFzc2VzL2VudHJ5LmpzPzZiYTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVTaWRlIGZyb20gJy4vZ2FtZS1zaWRlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cnkge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy4kcGxheVdpdGhDb21wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb21wJyk7XG4gICAgdGhpcy4kbWFpbkhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWhlYWRlcicpO1xuICAgIHRoaXMuJGVudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVudHJ5Jyk7XG4gICAgdGhpcy4kc2lkZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlcycpO1xuXG4gICAgdGhpcy4kbWFpbkhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgdGhpcy4kcGxheVdpdGhDb21wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLnBsYXlXaXRoQ29tcHV0ZXIoZSkpO1xuICB9XG5cbiAgcGxheVdpdGhDb21wdXRlciAoKSB7ICAgIFxuICAgIHRoaXMuZ2FtZVNpZGUgPSBuZXcgR2FtZVNpZGUoKTtcblxuICAgIHRoaXMuJHNpZGVzQmxvY2suc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy4kZW50cnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/classes/entry.js\n");

/***/ }),

/***/ "./src/js/classes/game-mode.js":
/*!*************************************!*\
  !*** ./src/js/classes/game-mode.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMode; });\nclass GameMode {\n  constructor () {\n    this.$gameModeInputs = document.querySelectorAll('.game-mode__input');\n    this.gameMode = 'same';\n\n    this.$gameModeInputs.forEach(input => {\n      input.addEventListener('change', e => this.selectGameMode(e));\n    });\n  }\n\n  selectGameMode (e) {\n    this.gameMode = e.target.value;\n  }\n\n  getGameMode () {\n    return this.gameMode;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9nYW1lLW1vZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9nYW1lLW1vZGUuanM/MzRkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRnYW1lTW9kZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLW1vZGVfX2lucHV0Jyk7XG4gICAgdGhpcy5nYW1lTW9kZSA9ICdzYW1lJztcblxuICAgIHRoaXMuJGdhbWVNb2RlSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB0aGlzLnNlbGVjdEdhbWVNb2RlKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEdhbWVNb2RlIChlKSB7XG4gICAgdGhpcy5nYW1lTW9kZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgZ2V0R2FtZU1vZGUgKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVNb2RlO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/classes/game-mode.js\n");

/***/ }),

/***/ "./src/js/classes/game-side.js":
/*!*************************************!*\
  !*** ./src/js/classes/game-side.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameSide; });\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/js/classes/game.js\");\n/* harmony import */ var _game_mode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game-mode */ \"./src/js/classes/game-mode.js\");\n\n\n\nclass GameSide {\n  constructor () {\n    this.$mainGame = document.querySelector('.main-game');\n    this.$sidesBlock = document.querySelector('.sides');\n\n    const $sides = document.querySelectorAll('.sides__side');\n\n    $sides.forEach($side => {\n      $side.addEventListener('click', e => this.selectSide(e));\n    });\n\n    this.gameMode = new _game_mode__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  selectSide (e) {\n    const humanSide = e.currentTarget.getAttribute('data-side');\n    const botSide = humanSide === 'X' ? 'O' : 'X'; \n    const gameMode = this.gameMode.getGameMode();\n\n    this.$mainGame.style.display = 'block';\n    this.$sidesBlock.style.display = 'none';\n\n    new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](humanSide, botSide, gameMode);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9nYW1lLXNpZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9nYW1lLXNpZGUuanM/OTZkOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUnO1xuaW1wb3J0IEdhbWVNb2RlIGZyb20gJy4vZ2FtZS1tb2RlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVNpZGUge1xuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgdGhpcy4kbWFpbkdhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1nYW1lJyk7XG4gICAgdGhpcy4kc2lkZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlcycpO1xuXG4gICAgY29uc3QgJHNpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVzX19zaWRlJyk7XG5cbiAgICAkc2lkZXMuZm9yRWFjaCgkc2lkZSA9PiB7XG4gICAgICAkc2lkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5zZWxlY3RTaWRlKGUpKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZ2FtZU1vZGUgPSBuZXcgR2FtZU1vZGUoKTtcbiAgfVxuXG4gIHNlbGVjdFNpZGUgKGUpIHtcbiAgICBjb25zdCBodW1hblNpZGUgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNpZGUnKTtcbiAgICBjb25zdCBib3RTaWRlID0gaHVtYW5TaWRlID09PSAnWCcgPyAnTycgOiAnWCc7IFxuICAgIGNvbnN0IGdhbWVNb2RlID0gdGhpcy5nYW1lTW9kZS5nZXRHYW1lTW9kZSgpO1xuXG4gICAgdGhpcy4kbWFpbkdhbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdGhpcy4kc2lkZXNCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgbmV3IEdhbWUoaHVtYW5TaWRlLCBib3RTaWRlLCBnYW1lTW9kZSk7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/classes/game-side.js\n");

/***/ }),

/***/ "./src/js/classes/game.js":
/*!********************************!*\
  !*** ./src/js/classes/game.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/js/classes/player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ \"./src/js/utils.js\");\n\n\n\nclass Game {\n  constructor (humanSide, botSide, selectedGameMode) {\n    this.$board = document.querySelector('.board');\n    this.$pointsValues = document.querySelector('.points__values');\n    this.$winner = document.querySelector('.winner');\n\n    this.board = Array.from(Array(9).keys());\n    this.isThereWinner = false;\n\n    this.humanPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](humanSide);\n    this.botPlayer = new _player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](botSide);\n    this.tieScore = 0;\n    this.selectedGameMode = selectedGameMode;\n\n    this.addElement = this.addElement.bind(this);\n\n    this.$board.addEventListener('click', e => this.addElement(e));\n\n    this.initButtons();\n    this.handleMovesTurn();\n  }\n\n  isChangingGameMode () {\n    return this.selectedGameMode === 'changing' ? true : false;\n  }\n\n  initButtons () {\n    this.$btnLeave = document.querySelector('.btn--leave');\n    this.$btnNew = document.querySelector('.btn--new');\n    this.$btnResign = document.querySelector('.btn--resign');\n    this.$btnReset = document.querySelector('.btn--reset');\n\n    this.$btnResign.disabled = true;\n\n    this.$btnNew.addEventListener('click', () => this.newGame());\n    this.$btnReset.addEventListener('click', () => this.resetGameScore());\n    this.$btnResign.addEventListener('click', () =>\n      this.declareWinner(this.botPlayer.side)\n    );\n    this.$btnLeave.addEventListener('click', () =>\n      this.leaveGame(this.botPlayer.side)\n    );\n  }\n\n  resetGameScore () {\n    this.humanPlayer.score = 0;\n    this.botPlayer.score = 0;\n    this.tieScore = 0;\n\n    this.$pointsValues.children[0].textContent = 0;\n    this.$pointsValues.children[2].textContent = 0;\n    this.$pointsValues.children[1].textContent = 0;\n\n    this.$btnReset.disabled = true;\n  }\n\n  leaveGame () {\n    window.history.back();\n  }\n\n  handleMovesTurn () {\n    if (this.humanPlayer.side === 'O') {\n      this.makeMove(0, this.botPlayer.side);\n    }\n  }\n\n  newGame () {\n    this.board = Array.from(Array(9).keys());\n    this.isThereWinner = false;\n    this.resetSquares();\n    this.handleMovesTurn();\n\n    this.$btnNew.disabled = true;\n    this.$btnResign.disabled = true;\n    this.$btnReset.disabled = true;\n\n    this.$board.style.display = 'table';\n    this.$winner.style.display = 'none';\n  }\n\n  addElement (e) {\n    const squareId = e.target.id.slice(7);\n\n    if (typeof this.board[squareId] === 'number') {\n      this.makeMove(squareId, this.humanPlayer.side);\n      this.checkIfItFirstMove();\n\n      const botSquareId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getBestBotMove\"])(this.board, this.botPlayer.side);\n      this.makeMove(botSquareId, this.botPlayer.side);\n    }\n  }\n\n  makeMove (squareId, player) {\n    if (!this.isThereWinner) {\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"appendFigure\"])(squareId, player);\n      this.board[squareId] = player;\n\n      this.checkIfThereIsResult(player);\n    }\n  }\n\n  checkIfThereIsResult (player) {\n    const winner = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, player);\n    const tie = this.isTie();\n\n    switch (winner || tie || true) {\n      case winner: {\n        this.isThereWinner = true;\n        this.declareWinner(winner.player);\n        break;\n      }\n      case tie: {\n        this.isThereWinner = true;\n        this.declareWinner('Tie!');\n        break;\n      }\n    }\n  }\n\n  declareWinner (player) {\n    const $winner = document.querySelector('.winner__result');\n\n    if (player === this.humanPlayer.side) {\n      this.humanPlayer.score++;\n      this.$pointsValues.children[0].textContent = this.humanPlayer.score;\n      $winner.textContent = 'YOU WON !';\n    } else if (player === this.botPlayer.side) {\n      this.botPlayer.score++;\n      this.$pointsValues.children[2].textContent = this.botPlayer.score;\n      $winner.textContent = 'YOU LOSE !';\n    } else {\n      this.tieScore++;\n      this.$pointsValues.children[1].textContent = this.tieScore;\n      $winner.textContent = 'TIE !';\n    }\n\n    this.$board.removeEventListener('click', this.addElement);\n\n    this.$btnLeave.disabled = true;\n    this.$btnResign.disabled = true;\n\n    setTimeout(() => {\n      this.$board.style.display = 'none';\n      this.$winner.style.display = 'flex';\n\n      this.$btnNew.disabled = false;\n      this.$btnLeave.disabled = false;\n      this.$btnReset.disabled = false;\n    }, 500);\n  }\n\n  resetSquares () {\n    const $squares = document.querySelectorAll('.board__item');\n\n    $squares.forEach($square => {\n      if ($square.firstElementChild) {\n        $square.removeChild($square.firstElementChild);\n      }\n    });\n  }\n\n  checkIfItFirstMove () {\n    const movesCount = this.board.filter(side => side === this.humanPlayer.side);\n\n    if (movesCount.length === 1) {\n      this.$btnResign.disabled = false;\n      this.$btnLeave.disabled = true;\n    }\n  }\n\n  isTie () {\n    return Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getEmptySquares\"])(this.board).length === 0;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9nYW1lLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NsYXNzZXMvZ2FtZS5qcz8wZmNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInO1xuaW1wb3J0IHtnZXRFbXB0eVNxdWFyZXMsIGlzV29uLCBnZXRCZXN0Qm90TW92ZSwgYXBwZW5kRmlndXJlfSBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvciAoaHVtYW5TaWRlLCBib3RTaWRlLCBzZWxlY3RlZEdhbWVNb2RlKSB7XG4gICAgdGhpcy4kYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmQnKTtcbiAgICB0aGlzLiRwb2ludHNWYWx1ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9pbnRzX192YWx1ZXMnKTtcbiAgICB0aGlzLiR3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyJyk7XG5cbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSg5KS5rZXlzKCkpO1xuICAgIHRoaXMuaXNUaGVyZVdpbm5lciA9IGZhbHNlO1xuXG4gICAgdGhpcy5odW1hblBsYXllciA9IG5ldyBQbGF5ZXIoaHVtYW5TaWRlKTtcbiAgICB0aGlzLmJvdFBsYXllciA9IG5ldyBQbGF5ZXIoYm90U2lkZSk7XG4gICAgdGhpcy50aWVTY29yZSA9IDA7XG4gICAgdGhpcy5zZWxlY3RlZEdhbWVNb2RlID0gc2VsZWN0ZWRHYW1lTW9kZTtcblxuICAgIHRoaXMuYWRkRWxlbWVudCA9IHRoaXMuYWRkRWxlbWVudC5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy4kYm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRoaXMuYWRkRWxlbWVudChlKSk7XG5cbiAgICB0aGlzLmluaXRCdXR0b25zKCk7XG4gICAgdGhpcy5oYW5kbGVNb3Zlc1R1cm4oKTtcbiAgfVxuXG4gIGlzQ2hhbmdpbmdHYW1lTW9kZSAoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWRHYW1lTW9kZSA9PT0gJ2NoYW5naW5nJyA/IHRydWUgOiBmYWxzZTtcbiAgfVxuXG4gIGluaXRCdXR0b25zICgpIHtcbiAgICB0aGlzLiRidG5MZWF2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLWxlYXZlJyk7XG4gICAgdGhpcy4kYnRuTmV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tbmV3Jyk7XG4gICAgdGhpcy4kYnRuUmVzaWduID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcmVzaWduJyk7XG4gICAgdGhpcy4kYnRuUmVzZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1yZXNldCcpO1xuXG4gICAgdGhpcy4kYnRuUmVzaWduLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuJGJ0bk5ldy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMubmV3R2FtZSgpKTtcbiAgICB0aGlzLiRidG5SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMucmVzZXRHYW1lU2NvcmUoKSk7XG4gICAgdGhpcy4kYnRuUmVzaWduLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMuZGVjbGFyZVdpbm5lcih0aGlzLmJvdFBsYXllci5zaWRlKVxuICAgICk7XG4gICAgdGhpcy4kYnRuTGVhdmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PlxuICAgICAgdGhpcy5sZWF2ZUdhbWUodGhpcy5ib3RQbGF5ZXIuc2lkZSlcbiAgICApO1xuICB9XG5cbiAgcmVzZXRHYW1lU2NvcmUgKCkge1xuICAgIHRoaXMuaHVtYW5QbGF5ZXIuc2NvcmUgPSAwO1xuICAgIHRoaXMuYm90UGxheWVyLnNjb3JlID0gMDtcbiAgICB0aGlzLnRpZVNjb3JlID0gMDtcblxuICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IDA7XG4gICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gMDtcbiAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSAwO1xuXG4gICAgdGhpcy4kYnRuUmVzZXQuZGlzYWJsZWQgPSB0cnVlO1xuICB9XG5cbiAgbGVhdmVHYW1lICgpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gIH1cblxuICBoYW5kbGVNb3Zlc1R1cm4gKCkge1xuICAgIGlmICh0aGlzLmh1bWFuUGxheWVyLnNpZGUgPT09ICdPJykge1xuICAgICAgdGhpcy5tYWtlTW92ZSgwLCB0aGlzLmJvdFBsYXllci5zaWRlKTtcbiAgICB9XG4gIH1cblxuICBuZXdHYW1lICgpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkuZnJvbShBcnJheSg5KS5rZXlzKCkpO1xuICAgIHRoaXMuaXNUaGVyZVdpbm5lciA9IGZhbHNlO1xuICAgIHRoaXMucmVzZXRTcXVhcmVzKCk7XG4gICAgdGhpcy5oYW5kbGVNb3Zlc1R1cm4oKTtcblxuICAgIHRoaXMuJGJ0bk5ldy5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kYnRuUmVzaWduLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRidG5SZXNldC5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLiRib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ3RhYmxlJztcbiAgICB0aGlzLiR3aW5uZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfVxuXG4gIGFkZEVsZW1lbnQgKGUpIHtcbiAgICBjb25zdCBzcXVhcmVJZCA9IGUudGFyZ2V0LmlkLnNsaWNlKDcpO1xuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvYXJkW3NxdWFyZUlkXSA9PT0gJ251bWJlcicpIHtcbiAgICAgIHRoaXMubWFrZU1vdmUoc3F1YXJlSWQsIHRoaXMuaHVtYW5QbGF5ZXIuc2lkZSk7XG4gICAgICB0aGlzLmNoZWNrSWZJdEZpcnN0TW92ZSgpO1xuXG4gICAgICBjb25zdCBib3RTcXVhcmVJZCA9IGdldEJlc3RCb3RNb3ZlKHRoaXMuYm9hcmQsIHRoaXMuYm90UGxheWVyLnNpZGUpO1xuICAgICAgdGhpcy5tYWtlTW92ZShib3RTcXVhcmVJZCwgdGhpcy5ib3RQbGF5ZXIuc2lkZSk7XG4gICAgfVxuICB9XG5cbiAgbWFrZU1vdmUgKHNxdWFyZUlkLCBwbGF5ZXIpIHtcbiAgICBpZiAoIXRoaXMuaXNUaGVyZVdpbm5lcikge1xuICAgICAgYXBwZW5kRmlndXJlKHNxdWFyZUlkLCBwbGF5ZXIpO1xuICAgICAgdGhpcy5ib2FyZFtzcXVhcmVJZF0gPSBwbGF5ZXI7XG5cbiAgICAgIHRoaXMuY2hlY2tJZlRoZXJlSXNSZXN1bHQocGxheWVyKTtcbiAgICB9XG4gIH1cblxuICBjaGVja0lmVGhlcmVJc1Jlc3VsdCAocGxheWVyKSB7XG4gICAgY29uc3Qgd2lubmVyID0gaXNXb24odGhpcy5ib2FyZCwgcGxheWVyKTtcbiAgICBjb25zdCB0aWUgPSB0aGlzLmlzVGllKCk7XG5cbiAgICBzd2l0Y2ggKHdpbm5lciB8fCB0aWUgfHwgdHJ1ZSkge1xuICAgICAgY2FzZSB3aW5uZXI6IHtcbiAgICAgICAgdGhpcy5pc1RoZXJlV2lubmVyID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5kZWNsYXJlV2lubmVyKHdpbm5lci5wbGF5ZXIpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgdGllOiB7XG4gICAgICAgIHRoaXMuaXNUaGVyZVdpbm5lciA9IHRydWU7XG4gICAgICAgIHRoaXMuZGVjbGFyZVdpbm5lcignVGllIScpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBkZWNsYXJlV2lubmVyIChwbGF5ZXIpIHtcbiAgICBjb25zdCAkd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcl9fcmVzdWx0Jyk7XG5cbiAgICBpZiAocGxheWVyID09PSB0aGlzLmh1bWFuUGxheWVyLnNpZGUpIHtcbiAgICAgIHRoaXMuaHVtYW5QbGF5ZXIuc2NvcmUrKztcbiAgICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXMuaHVtYW5QbGF5ZXIuc2NvcmU7XG4gICAgICAkd2lubmVyLnRleHRDb250ZW50ID0gJ1lPVSBXT04gISc7XG4gICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09IHRoaXMuYm90UGxheWVyLnNpZGUpIHtcbiAgICAgIHRoaXMuYm90UGxheWVyLnNjb3JlKys7XG4gICAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMl0udGV4dENvbnRlbnQgPSB0aGlzLmJvdFBsYXllci5zY29yZTtcbiAgICAgICR3aW5uZXIudGV4dENvbnRlbnQgPSAnWU9VIExPU0UgISc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudGllU2NvcmUrKztcbiAgICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblsxXS50ZXh0Q29udGVudCA9IHRoaXMudGllU2NvcmU7XG4gICAgICAkd2lubmVyLnRleHRDb250ZW50ID0gJ1RJRSAhJztcbiAgICB9XG5cbiAgICB0aGlzLiRib2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuYWRkRWxlbWVudCk7XG5cbiAgICB0aGlzLiRidG5MZWF2ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kYnRuUmVzaWduLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy4kYm9hcmQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIHRoaXMuJHdpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgICB0aGlzLiRidG5OZXcuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGJ0bkxlYXZlLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiRidG5SZXNldC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0sIDUwMCk7XG4gIH1cblxuICByZXNldFNxdWFyZXMgKCkge1xuICAgIGNvbnN0ICRzcXVhcmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJvYXJkX19pdGVtJyk7XG5cbiAgICAkc3F1YXJlcy5mb3JFYWNoKCRzcXVhcmUgPT4ge1xuICAgICAgaWYgKCRzcXVhcmUuZmlyc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgJHNxdWFyZS5yZW1vdmVDaGlsZCgkc3F1YXJlLmZpcnN0RWxlbWVudENoaWxkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrSWZJdEZpcnN0TW92ZSAoKSB7XG4gICAgY29uc3QgbW92ZXNDb3VudCA9IHRoaXMuYm9hcmQuZmlsdGVyKHNpZGUgPT4gc2lkZSA9PT0gdGhpcy5odW1hblBsYXllci5zaWRlKTtcblxuICAgIGlmIChtb3Zlc0NvdW50Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy4kYnRuUmVzaWduLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiRidG5MZWF2ZS5kaXNhYmxlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaXNUaWUgKCkge1xuICAgIHJldHVybiBnZXRFbXB0eVNxdWFyZXModGhpcy5ib2FyZCkubGVuZ3RoID09PSAwO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/classes/game.js\n");

/***/ }),

/***/ "./src/js/classes/player.js":
/*!**********************************!*\
  !*** ./src/js/classes/player.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n  constructor (side) {\n    this.side = side;\n    this.score = 0;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvY2xhc3Nlcy9wbGF5ZXIuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvY2xhc3Nlcy9wbGF5ZXIuanM/MWIwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICBjb25zdHJ1Y3RvciAoc2lkZSkge1xuICAgIHRoaXMuc2lkZSA9IHNpZGU7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/classes/player.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _classes_entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/entry */ \"./src/js/classes/entry.js\");\n\n\n\nnew _classes_entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgRW50cnkgZnJvbSAnLi9jbGFzc2VzL2VudHJ5JztcblxubmV3IEVudHJ5KCk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: appendFigure, isWon, getEmptySquares, getBestBotMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendFigure\", function() { return appendFigure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWon\", function() { return isWon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEmptySquares\", function() { return getEmptySquares; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBestBotMove\", function() { return getBestBotMove; });\nlet humanPlayer = 'X';\nlet botPlayer = 'O';\n\nconst winCombos = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8],\n  [0, 3, 6],\n  [1, 4, 7],\n  [2, 5, 8],\n  [0, 4, 8],\n  [6, 4, 2]\n];\n\nfunction appendFigure (squareId, player) {\n  const $element = createFigure(player);\n  const $square = document.getElementById(`square-${squareId}`);\n\n  $square.appendChild($element);\n}\n\nfunction createFigure (player) {\n  const $el = document.createElement('div');\n  $el.className = player === 'X' ? 'board__cross' : 'board__circle';\n\n  return $el;\n}\n\nfunction isWon (board, player) {\n  const plays = board.reduce((a, e, i) => {\n    return e === player ? a.concat(i) : a;\n  }, []);\n\n  let gameWon = null;\n\n  for (const [index, win] of winCombos.entries()) {\n    if (win.every(elem => plays.indexOf(elem) > -1)) {\n      gameWon = { index: index, player: player };\n      break;\n    }\n  }\n\n  return gameWon;\n}\n\nfunction getEmptySquares (board) {\n  return board.filter(s => typeof s === 'number');\n}\n\nfunction getBestBotMove (board, player) {\n  if (player !== 'O') {\n    botPlayer = 'X';\n    humanPlayer = 'O';\n  } \n\n  return minimax(board, botPlayer).index;\n}\n\nfunction minimax (board, player) {\n  const emptySquares = getEmptySquares(board);\n  const moves = [];\n\n  if (isWon(board, humanPlayer)) {\n    return { score: -10 };\n  } else if (isWon(board, botPlayer)) {\n    return { score: 10 };\n  } else if (emptySquares.length === 0) {\n    return { score: 0 };\n  }\n\n  for (let i = 0; i < emptySquares.length; i++) {\n    const move = {};\n    let result;\n\n    move.index = board[emptySquares[i]];\n    board[emptySquares[i]] = player;\n\n    if (player === humanPlayer) {\n      result = minimax(board, botPlayer);\n      move.score = result.score;\n    } else {\n      result = minimax(board, humanPlayer);\n      move.score = result.score;\n    }\n\n    board[emptySquares[i]] = move.index;\n\n    moves.push(move);\n  }\n\n  let bestMove;\n  let bestScore;\n\n  if (player === botPlayer) {\n    bestScore = -10000;\n\n    for (let i = 0; i < moves.length; i++) {\n      if (moves[i].score > bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  } else {\n    bestScore = 10000;\n\n    for (let i = 0; i < moves.length; i++) {\n      if (moves[i].score < bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  }\n\n  return moves[bestMove];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanM/OTk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgaHVtYW5QbGF5ZXIgPSAnWCc7XG5sZXQgYm90UGxheWVyID0gJ08nO1xuXG5jb25zdCB3aW5Db21ib3MgPSBbXG4gIFswLCAxLCAyXSxcbiAgWzMsIDQsIDVdLFxuICBbNiwgNywgOF0sXG4gIFswLCAzLCA2XSxcbiAgWzEsIDQsIDddLFxuICBbMiwgNSwgOF0sXG4gIFswLCA0LCA4XSxcbiAgWzYsIDQsIDJdXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kRmlndXJlIChzcXVhcmVJZCwgcGxheWVyKSB7XG4gIGNvbnN0ICRlbGVtZW50ID0gY3JlYXRlRmlndXJlKHBsYXllcik7XG4gIGNvbnN0ICRzcXVhcmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgc3F1YXJlLSR7c3F1YXJlSWR9YCk7XG5cbiAgJHNxdWFyZS5hcHBlbmRDaGlsZCgkZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZpZ3VyZSAocGxheWVyKSB7XG4gIGNvbnN0ICRlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAkZWwuY2xhc3NOYW1lID0gcGxheWVyID09PSAnWCcgPyAnYm9hcmRfX2Nyb3NzJyA6ICdib2FyZF9fY2lyY2xlJztcblxuICByZXR1cm4gJGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXb24gKGJvYXJkLCBwbGF5ZXIpIHtcbiAgY29uc3QgcGxheXMgPSBib2FyZC5yZWR1Y2UoKGEsIGUsIGkpID0+IHtcbiAgICByZXR1cm4gZSA9PT0gcGxheWVyID8gYS5jb25jYXQoaSkgOiBhO1xuICB9LCBbXSk7XG5cbiAgbGV0IGdhbWVXb24gPSBudWxsO1xuXG4gIGZvciAoY29uc3QgW2luZGV4LCB3aW5dIG9mIHdpbkNvbWJvcy5lbnRyaWVzKCkpIHtcbiAgICBpZiAod2luLmV2ZXJ5KGVsZW0gPT4gcGxheXMuaW5kZXhPZihlbGVtKSA+IC0xKSkge1xuICAgICAgZ2FtZVdvbiA9IHsgaW5kZXg6IGluZGV4LCBwbGF5ZXI6IHBsYXllciB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVXb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbXB0eVNxdWFyZXMgKGJvYXJkKSB7XG4gIHJldHVybiBib2FyZC5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ251bWJlcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmVzdEJvdE1vdmUgKGJvYXJkLCBwbGF5ZXIpIHtcbiAgaWYgKHBsYXllciAhPT0gJ08nKSB7XG4gICAgYm90UGxheWVyID0gJ1gnO1xuICAgIGh1bWFuUGxheWVyID0gJ08nO1xuICB9IFxuXG4gIHJldHVybiBtaW5pbWF4KGJvYXJkLCBib3RQbGF5ZXIpLmluZGV4O1xufVxuXG5mdW5jdGlvbiBtaW5pbWF4IChib2FyZCwgcGxheWVyKSB7XG4gIGNvbnN0IGVtcHR5U3F1YXJlcyA9IGdldEVtcHR5U3F1YXJlcyhib2FyZCk7XG4gIGNvbnN0IG1vdmVzID0gW107XG5cbiAgaWYgKGlzV29uKGJvYXJkLCBodW1hblBsYXllcikpIHtcbiAgICByZXR1cm4geyBzY29yZTogLTEwIH07XG4gIH0gZWxzZSBpZiAoaXNXb24oYm9hcmQsIGJvdFBsYXllcikpIHtcbiAgICByZXR1cm4geyBzY29yZTogMTAgfTtcbiAgfSBlbHNlIGlmIChlbXB0eVNxdWFyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHsgc2NvcmU6IDAgfTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZW1wdHlTcXVhcmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbW92ZSA9IHt9O1xuICAgIGxldCByZXN1bHQ7XG5cbiAgICBtb3ZlLmluZGV4ID0gYm9hcmRbZW1wdHlTcXVhcmVzW2ldXTtcbiAgICBib2FyZFtlbXB0eVNxdWFyZXNbaV1dID0gcGxheWVyO1xuXG4gICAgaWYgKHBsYXllciA9PT0gaHVtYW5QbGF5ZXIpIHtcbiAgICAgIHJlc3VsdCA9IG1pbmltYXgoYm9hcmQsIGJvdFBsYXllcik7XG4gICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBtaW5pbWF4KGJvYXJkLCBodW1hblBsYXllcik7XG4gICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgIH1cblxuICAgIGJvYXJkW2VtcHR5U3F1YXJlc1tpXV0gPSBtb3ZlLmluZGV4O1xuXG4gICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgfVxuXG4gIGxldCBiZXN0TW92ZTtcbiAgbGV0IGJlc3RTY29yZTtcblxuICBpZiAocGxheWVyID09PSBib3RQbGF5ZXIpIHtcbiAgICBiZXN0U2NvcmUgPSAtMTAwMDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobW92ZXNbaV0uc2NvcmUgPiBiZXN0U2NvcmUpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gbW92ZXNbaV0uc2NvcmU7XG4gICAgICAgIGJlc3RNb3ZlID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgYmVzdFNjb3JlID0gMTAwMDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobW92ZXNbaV0uc2NvcmUgPCBiZXN0U2NvcmUpIHtcbiAgICAgICAgYmVzdFNjb3JlID0gbW92ZXNbaV0uc2NvcmU7XG4gICAgICAgIGJlc3RNb3ZlID0gaTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbW92ZXNbYmVzdE1vdmVdO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc2Nzcy9tYWluLnNjc3M/NGY5MyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ }),

/***/ 0:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/js/main.js */"./src/js/main.js");


/***/ })

/******/ });