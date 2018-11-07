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

/***/ "./src/js/Entry.js":
/*!*************************!*\
  !*** ./src/js/Entry.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Entry; });\n/* harmony import */ var _GameSide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameSide */ \"./src/js/GameSide.js\");\n\n\nclass Entry {\n  constructor () {\n    this.$playWithCompBtn = document.querySelector('.btn-comp');\n    this.$mainHeader = document.querySelector('.main-header');\n    this.$entry = document.querySelector('.entry');\n    this.$sidesBlock = document.querySelector('.sides');\n\n    this.$mainHeader.style.display = 'none';\n\n    this.$playWithCompBtn.addEventListener('click', e => this.playWithComputer(e));\n  }\n\n  playWithComputer () {    \n    this.gameSide = new _GameSide__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n    this.$sidesBlock.style.display = 'block';\n    this.$entry.style.display = 'none';\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvRW50cnkuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvRW50cnkuanM/NzZhYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZVNpZGUgZnJvbSAnLi9HYW1lU2lkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVudHJ5IHtcbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuJHBsYXlXaXRoQ29tcEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY29tcCcpO1xuICAgIHRoaXMuJG1haW5IZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1oZWFkZXInKTtcbiAgICB0aGlzLiRlbnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbnRyeScpO1xuICAgIHRoaXMuJHNpZGVzQmxvY2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZXMnKTtcblxuICAgIHRoaXMuJG1haW5IZWFkZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIHRoaXMuJHBsYXlXaXRoQ29tcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5wbGF5V2l0aENvbXB1dGVyKGUpKTtcbiAgfVxuXG4gIHBsYXlXaXRoQ29tcHV0ZXIgKCkgeyAgICBcbiAgICB0aGlzLmdhbWVTaWRlID0gbmV3IEdhbWVTaWRlKCk7XG5cbiAgICB0aGlzLiRzaWRlc0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHRoaXMuJGVudHJ5LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Entry.js\n");

/***/ }),

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n\nclass Game {\n  constructor (humanSide, botSide, selectedGameMode) {\n    this.$board = document.querySelector('.board');\n    this.$pointsValues = document.querySelector('.points__values');\n    this.$winner = document.querySelector('.winner');\n\n    this.board = Array.from(Array(9).keys());\n\n    this.humanPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](humanSide);\n    this.botPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](botSide);\n    this.tieScore = 0;\n    this.selectedGameMode = selectedGameMode;\n\n    this.addElement = this.addElement.bind(this);\n\n    this.$board.addEventListener('click', e => this.addElement(e));\n\n    this.initButtons();\n    this.handleMovesTurn();\n  }\n\n  isChangingGameMode () {\n    return this.selectedGameMode === 'changing' ? true : false;\n  }\n\n  initButtons () {\n    this.$btnLeave = document.querySelector('.btn--leave');\n    this.$btnNew = document.querySelector('.btn--new');\n    this.$btnResign = document.querySelector('.btn--resign');\n    this.$btnReset = document.querySelector('.btn--reset');\n\n    this.$btnResign.disabled = true;\n\n    this.$btnNew.addEventListener('click', () => this.newGame());\n    this.$btnReset.addEventListener('click', () => this.resetGameScore());\n    this.$btnResign.addEventListener('click', () =>\n      this.declareWinner(this.botPlayer.side)\n    );\n    this.$btnLeave.addEventListener('click', () =>\n      this.leaveGame(this.botPlayer.side)\n    );\n  }\n\n  resetGameScore () {\n    this.humanPlayer.score = 0;\n    this.botPlayer.score = 0;\n    this.tieScore = 0;\n\n    this.$pointsValues.children[0].textContent = 0;\n    this.$pointsValues.children[2].textContent = 0;\n    this.$pointsValues.children[1].textContent = 0;\n\n    this.$btnReset.disabled = true;\n  }\n\n  leaveGame () {\n    window.history.back();\n  }\n\n  handleMovesTurn () {\n    if (this.humanPlayer.side === 'O') {\n      this.makeMove(0, this.botPlayer.side);\n    }\n  }\n\n  newGame () {\n    this.board = Array.from(Array(9).keys());\n    this.resetSquares();\n    this.handleMovesTurn();\n\n    this.$btnNew.disabled = true;\n    this.$btnResign.disabled = true;\n    this.$btnReset.disabled = true;\n\n    this.$board.style.display = 'table';\n    this.$winner.style.display = 'none';\n  }\n\n  addElement (e) {\n    const squareId = e.target.id.slice(7);\n\n    if (typeof this.board[squareId] === 'number') {\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, this.botPlayer.side) && !this.isTie()) {\n        this.makeMove(squareId, this.humanPlayer.side);\n      }\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, this.humanPlayer.side) && !this.isTie()) {\n        this.makeMove(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getBestBotMove\"])(this.board), this.botPlayer.side);\n      }\n    }\n  }\n\n  makeMove (squareId, player) {\t\t\n    Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"appendFigure\"])(squareId, player);\n    this.board[squareId] = player;\n\n    const gameWon = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, player);\n\n    if (gameWon) {\n      this.declareWinner(gameWon.player);\n    }\n\n    this.checkIfItFirstMove();\n    this.isTie();\n  }\n\n  declareWinner (winner) {\n    const $winner = document.querySelector('.winner__result');\n\n    if (winner === this.humanPlayer.side) {\n      this.humanPlayer.score++;\n      this.$pointsValues.children[0].textContent = this.humanPlayer.score;\n      $winner.textContent = 'YOU WON !';\n    } else if (winner === this.botPlayer.side) {\n      this.botPlayer.score++;\n      this.$pointsValues.children[2].textContent = this.botPlayer.score;\n      $winner.textContent = 'YOU LOSE !';\n    } else {\n      this.tieScore++;\n      this.$pointsValues.children[1].textContent = this.tieScore;\n      $winner.textContent = 'TIE !';\n    }\n\n    this.$board.removeEventListener('click', this.addElement);\n\n    this.$btnLeave.disabled = true;\n    this.$btnResign.disabled = true;\n\n    setTimeout(() => {\n      this.$board.style.display = 'none';\n      this.$winner.style.display = 'flex';\n\n      this.$btnNew.disabled = false;\n      this.$btnLeave.disabled = false;\n      this.$btnReset.disabled = false;\n    }, 500);\n  }\n\n  resetSquares () {\n    const $squares = document.querySelectorAll('.board__item');\n\n    $squares.forEach($square => {\n      if ($square.firstElementChild) {\n        $square.removeChild($square.firstElementChild);\n      }\n    });\n  }\n\n  checkIfItFirstMove () {\n    const movesCount = this.board.filter(side => side === this.humanPlayer.side);\n\n    if (movesCount.length === 1) {\n      this.$btnResign.disabled = false;\n      this.$btnLeave.disabled = true;\n    }\n  }\n\n  isTie () {\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getEmptySquares\"])(this.board).length === 0) {\n      this.declareWinner('Tie');\n\n      return true;\n    }\n\n    return false;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvR2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9HYW1lLmpzPzc5OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQge2dldEVtcHR5U3F1YXJlcywgaXNXb24sIGdldEJlc3RCb3RNb3ZlLCBhcHBlbmRGaWd1cmV9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IgKGh1bWFuU2lkZSwgYm90U2lkZSwgc2VsZWN0ZWRHYW1lTW9kZSkge1xuICAgIHRoaXMuJGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgdGhpcy4kcG9pbnRzVmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50c19fdmFsdWVzJyk7XG4gICAgdGhpcy4kd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xuXG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoOSkua2V5cygpKTtcblxuICAgIHRoaXMuaHVtYW5QbGF5ZXIgPSBuZXcgUGxheWVyKGh1bWFuU2lkZSk7XG4gICAgdGhpcy5ib3RQbGF5ZXIgPSBuZXcgUGxheWVyKGJvdFNpZGUpO1xuICAgIHRoaXMudGllU2NvcmUgPSAwO1xuICAgIHRoaXMuc2VsZWN0ZWRHYW1lTW9kZSA9IHNlbGVjdGVkR2FtZU1vZGU7XG5cbiAgICB0aGlzLmFkZEVsZW1lbnQgPSB0aGlzLmFkZEVsZW1lbnQuYmluZCh0aGlzKTtcblxuICAgIHRoaXMuJGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLmFkZEVsZW1lbnQoZSkpO1xuXG4gICAgdGhpcy5pbml0QnV0dG9ucygpO1xuICAgIHRoaXMuaGFuZGxlTW92ZXNUdXJuKCk7XG4gIH1cblxuICBpc0NoYW5naW5nR2FtZU1vZGUgKCkge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkR2FtZU1vZGUgPT09ICdjaGFuZ2luZycgPyB0cnVlIDogZmFsc2U7XG4gIH1cblxuICBpbml0QnV0dG9ucyAoKSB7XG4gICAgdGhpcy4kYnRuTGVhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1sZWF2ZScpO1xuICAgIHRoaXMuJGJ0bk5ldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5ldycpO1xuICAgIHRoaXMuJGJ0blJlc2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXJlc2lnbicpO1xuICAgIHRoaXMuJGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcmVzZXQnKTtcblxuICAgIHRoaXMuJGJ0blJlc2lnbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLiRidG5OZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm5ld0dhbWUoKSk7XG4gICAgdGhpcy4kYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlc2V0R2FtZVNjb3JlKCkpO1xuICAgIHRoaXMuJGJ0blJlc2lnbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLmRlY2xhcmVXaW5uZXIodGhpcy5ib3RQbGF5ZXIuc2lkZSlcbiAgICApO1xuICAgIHRoaXMuJGJ0bkxlYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMubGVhdmVHYW1lKHRoaXMuYm90UGxheWVyLnNpZGUpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0R2FtZVNjb3JlICgpIHtcbiAgICB0aGlzLmh1bWFuUGxheWVyLnNjb3JlID0gMDtcbiAgICB0aGlzLmJvdFBsYXllci5zY29yZSA9IDA7XG4gICAgdGhpcy50aWVTY29yZSA9IDA7XG5cbiAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAwO1xuICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IDA7XG4gICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gMDtcblxuICAgIHRoaXMuJGJ0blJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGxlYXZlR2FtZSAoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgaGFuZGxlTW92ZXNUdXJuICgpIHtcbiAgICBpZiAodGhpcy5odW1hblBsYXllci5zaWRlID09PSAnTycpIHtcbiAgICAgIHRoaXMubWFrZU1vdmUoMCwgdGhpcy5ib3RQbGF5ZXIuc2lkZSk7XG4gICAgfVxuICB9XG5cbiAgbmV3R2FtZSAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoOSkua2V5cygpKTtcbiAgICB0aGlzLnJlc2V0U3F1YXJlcygpO1xuICAgIHRoaXMuaGFuZGxlTW92ZXNUdXJuKCk7XG5cbiAgICB0aGlzLiRidG5OZXcuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuJGJ0blJlc2lnbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kYnRuUmVzZXQuZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgdGhpcy4kYm9hcmQuc3R5bGUuZGlzcGxheSA9ICd0YWJsZSc7XG4gICAgdGhpcy4kd2lubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICBhZGRFbGVtZW50IChlKSB7XG4gICAgY29uc3Qgc3F1YXJlSWQgPSBlLnRhcmdldC5pZC5zbGljZSg3KTtcblxuICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtzcXVhcmVJZF0gPT09ICdudW1iZXInKSB7XG5cbiAgICAgIGlmICghaXNXb24odGhpcy5ib2FyZCwgdGhpcy5ib3RQbGF5ZXIuc2lkZSkgJiYgIXRoaXMuaXNUaWUoKSkge1xuICAgICAgICB0aGlzLm1ha2VNb3ZlKHNxdWFyZUlkLCB0aGlzLmh1bWFuUGxheWVyLnNpZGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzV29uKHRoaXMuYm9hcmQsIHRoaXMuaHVtYW5QbGF5ZXIuc2lkZSkgJiYgIXRoaXMuaXNUaWUoKSkge1xuICAgICAgICB0aGlzLm1ha2VNb3ZlKGdldEJlc3RCb3RNb3ZlKHRoaXMuYm9hcmQpLCB0aGlzLmJvdFBsYXllci5zaWRlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtYWtlTW92ZSAoc3F1YXJlSWQsIHBsYXllcikge1x0XHRcbiAgICBhcHBlbmRGaWd1cmUoc3F1YXJlSWQsIHBsYXllcik7XG4gICAgdGhpcy5ib2FyZFtzcXVhcmVJZF0gPSBwbGF5ZXI7XG5cbiAgICBjb25zdCBnYW1lV29uID0gaXNXb24odGhpcy5ib2FyZCwgcGxheWVyKTtcblxuICAgIGlmIChnYW1lV29uKSB7XG4gICAgICB0aGlzLmRlY2xhcmVXaW5uZXIoZ2FtZVdvbi5wbGF5ZXIpO1xuICAgIH1cblxuICAgIHRoaXMuY2hlY2tJZkl0Rmlyc3RNb3ZlKCk7XG4gICAgdGhpcy5pc1RpZSgpO1xuICB9XG5cbiAgZGVjbGFyZVdpbm5lciAod2lubmVyKSB7XG4gICAgY29uc3QgJHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXJfX3Jlc3VsdCcpO1xuXG4gICAgaWYgKHdpbm5lciA9PT0gdGhpcy5odW1hblBsYXllci5zaWRlKSB7XG4gICAgICB0aGlzLmh1bWFuUGxheWVyLnNjb3JlKys7XG4gICAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSB0aGlzLmh1bWFuUGxheWVyLnNjb3JlO1xuICAgICAgJHdpbm5lci50ZXh0Q29udGVudCA9ICdZT1UgV09OICEnO1xuICAgIH0gZWxzZSBpZiAod2lubmVyID09PSB0aGlzLmJvdFBsYXllci5zaWRlKSB7XG4gICAgICB0aGlzLmJvdFBsYXllci5zY29yZSsrO1xuICAgICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzJdLnRleHRDb250ZW50ID0gdGhpcy5ib3RQbGF5ZXIuc2NvcmU7XG4gICAgICAkd2lubmVyLnRleHRDb250ZW50ID0gJ1lPVSBMT1NFICEnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpZVNjb3JlKys7XG4gICAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMV0udGV4dENvbnRlbnQgPSB0aGlzLnRpZVNjb3JlO1xuICAgICAgJHdpbm5lci50ZXh0Q29udGVudCA9ICdUSUUgISc7XG4gICAgfVxuXG4gICAgdGhpcy4kYm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFkZEVsZW1lbnQpO1xuXG4gICAgdGhpcy4kYnRuTGVhdmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuJGJ0blJlc2lnbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuJGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB0aGlzLiR3aW5uZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgICAgdGhpcy4kYnRuTmV3LmRpc2FibGVkID0gZmFsc2U7XG4gICAgICB0aGlzLiRidG5MZWF2ZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kYnRuUmVzZXQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcmVzZXRTcXVhcmVzICgpIHtcbiAgICBjb25zdCAkc3F1YXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZF9faXRlbScpO1xuXG4gICAgJHNxdWFyZXMuZm9yRWFjaCgkc3F1YXJlID0+IHtcbiAgICAgIGlmICgkc3F1YXJlLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICRzcXVhcmUucmVtb3ZlQ2hpbGQoJHNxdWFyZS5maXJzdEVsZW1lbnRDaGlsZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0lmSXRGaXJzdE1vdmUgKCkge1xuICAgIGNvbnN0IG1vdmVzQ291bnQgPSB0aGlzLmJvYXJkLmZpbHRlcihzaWRlID0+IHNpZGUgPT09IHRoaXMuaHVtYW5QbGF5ZXIuc2lkZSk7XG5cbiAgICBpZiAobW92ZXNDb3VudC5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMuJGJ0blJlc2lnbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kYnRuTGVhdmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlzVGllICgpIHtcbiAgICBpZiAoZ2V0RW1wdHlTcXVhcmVzKHRoaXMuYm9hcmQpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5kZWNsYXJlV2lubmVyKCdUaWUnKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Game.js\n");

/***/ }),

/***/ "./src/js/GameMode.js":
/*!****************************!*\
  !*** ./src/js/GameMode.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameMode; });\nclass GameMode {\n  constructor () {\n    this.$gameModeInputs = document.querySelectorAll('.game-mode__input');\n    this.gameMode = 'same';\n\n    this.$gameModeInputs.forEach(input => {\n      input.addEventListener('change', e => this.selectGameMode(e));\n    });\n  }\n\n  selectGameMode (e) {\n    this.gameMode = e.target.value;\n  }\n\n  getGameMode () {\n    return this.gameMode;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvR2FtZU1vZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZU1vZGUuanM/NWVjMCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTW9kZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRnYW1lTW9kZUlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lLW1vZGVfX2lucHV0Jyk7XG4gICAgdGhpcy5nYW1lTW9kZSA9ICdzYW1lJztcblxuICAgIHRoaXMuJGdhbWVNb2RlSW5wdXRzLmZvckVhY2goaW5wdXQgPT4ge1xuICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB0aGlzLnNlbGVjdEdhbWVNb2RlKGUpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNlbGVjdEdhbWVNb2RlIChlKSB7XG4gICAgdGhpcy5nYW1lTW9kZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgZ2V0R2FtZU1vZGUgKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVNb2RlO1xuICB9XG59Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/GameMode.js\n");

/***/ }),

/***/ "./src/js/GameSide.js":
/*!****************************!*\
  !*** ./src/js/GameSide.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return GameSide; });\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n/* harmony import */ var _GameMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GameMode */ \"./src/js/GameMode.js\");\n\n\n\nclass GameSide {\n  constructor () {\n    this.$mainGame = document.querySelector('.main-game');\n    this.$sidesBlock = document.querySelector('.sides');\n\n    const $sides = document.querySelectorAll('.sides__side');\n\n    $sides.forEach($side => {\n      $side.addEventListener('click', e => this.selectSide(e));\n    });\n\n    this.gameMode = new _GameMode__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n  }\n\n  selectSide (e) {\n    const humanSide = e.currentTarget.getAttribute('data-side');\n    const botSide = humanSide === 'X' ? 'O' : 'X'; \n    const gameMode = this.gameMode.getGameMode();\n\n    this.$mainGame.style.display = 'block';\n    this.$sidesBlock.style.display = 'none';\n\n    new _Game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](humanSide, botSide, gameMode);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvR2FtZVNpZGUuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvR2FtZVNpZGUuanM/NzVmYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IEdhbWVNb2RlIGZyb20gJy4vR2FtZU1vZGUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lU2lkZSB7XG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICB0aGlzLiRtYWluR2FtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWdhbWUnKTtcbiAgICB0aGlzLiRzaWRlc0Jsb2NrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGVzJyk7XG5cbiAgICBjb25zdCAkc2lkZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZXNfX3NpZGUnKTtcblxuICAgICRzaWRlcy5mb3JFYWNoKCRzaWRlID0+IHtcbiAgICAgICRzaWRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB0aGlzLnNlbGVjdFNpZGUoZSkpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5nYW1lTW9kZSA9IG5ldyBHYW1lTW9kZSgpO1xuICB9XG5cbiAgc2VsZWN0U2lkZSAoZSkge1xuICAgIGNvbnN0IGh1bWFuU2lkZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2lkZScpO1xuICAgIGNvbnN0IGJvdFNpZGUgPSBodW1hblNpZGUgPT09ICdYJyA/ICdPJyA6ICdYJzsgXG4gICAgY29uc3QgZ2FtZU1vZGUgPSB0aGlzLmdhbWVNb2RlLmdldEdhbWVNb2RlKCk7XG5cbiAgICB0aGlzLiRtYWluR2FtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB0aGlzLiRzaWRlc0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBuZXcgR2FtZShodW1hblNpZGUsIGJvdFNpZGUsIGdhbWVNb2RlKTtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/GameSide.js\n");

/***/ }),

/***/ "./src/js/Player.js":
/*!**************************!*\
  !*** ./src/js/Player.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Player; });\nclass Player {\n  constructor (side) {\n    this.side = side;\n    this.score = 0;\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUGxheWVyLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL1BsYXllci5qcz8zMTYzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yIChzaWRlKSB7XG4gICAgdGhpcy5zaWRlID0gc2lkZTtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfVxufSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Player.js\n");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entry */ \"./src/js/Entry.js\");\n\n\n\nnew _Entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgRW50cnkgZnJvbSAnLi9FbnRyeSc7XG5cbm5ldyBFbnRyeSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: appendFigure, isWon, getEmptySquares, getBestBotMove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appendFigure\", function() { return appendFigure; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isWon\", function() { return isWon; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getEmptySquares\", function() { return getEmptySquares; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getBestBotMove\", function() { return getBestBotMove; });\nconst playerX = 'X';\nconst playerO = 'O';\nconst winCombos = [\n  [0, 1, 2],\n  [3, 4, 5],\n  [6, 7, 8],\n  [0, 3, 6],\n  [1, 4, 7],\n  [2, 5, 8],\n  [0, 4, 8],\n  [6, 4, 2]\n];\n\nfunction appendFigure (squareId, player) {\n  const $element = createFigure(player);\n  const $square = document.getElementById(`square-${squareId}`);\n\n  $square.appendChild($element);\n}\n\nfunction createFigure (player) {\n  const $el = document.createElement('div');\n  $el.className = player === playerX ? 'board__cross' : 'board__circle';\n\n  return $el;\n}\n\nfunction isWon (board, player) {\n  const plays = board.reduce((a, e, i) => {\n    return e === player ? a.concat(i) : a;\n  }, []);\n\n  let gameWon = null;\n\n  for (const [index, win] of winCombos.entries()) {\n    if (win.every(elem => plays.indexOf(elem) > -1)) {\n      gameWon = { index: index, player: player };\n      break;\n    }\n  }\n\n  return gameWon;\n}\n\nfunction getEmptySquares (board) {\n  return board.filter(s => typeof s === 'number');\n}\n\nfunction getBestBotMove (newBoard) {\n  return minimax(newBoard, playerO).index;\n}\n\nfunction minimax (newBoard, player) {\n  const emptySquares = getEmptySquares(newBoard);\n  const moves = [];\n\n  if (isWon(newBoard, playerX)) {\n    return { score: -10 };\n  } else if (isWon(newBoard, playerO)) {\n    return { score: 10 };\n  } else if (emptySquares.length === 0) {\n    return { score: 0 };\n  }\n\n  for (let i = 0; i < emptySquares.length; i++) {\n    const move = {};\n    let result;\n\n    move.index = newBoard[emptySquares[i]];\n    newBoard[emptySquares[i]] = player;\n\n    if (player === playerO) {\n      result = minimax(newBoard, playerX);\n      move.score = result.score;\n    } else {\n      result = minimax(newBoard, playerO);\n      move.score = result.score;\n    }\n\n    newBoard[emptySquares[i]] = move.index;\n\n    moves.push(move);\n  }\n\n  let bestMove;\n  let bestScore;\n\n  if (player === playerO) {\n    bestScore = -10000;\n\n    for (let i = 0; i < moves.length; i++) {\n      if (moves[i].score > bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  } else {\n    bestScore = 10000;\n\n    for (let i = 0; i < moves.length; i++) {\n      if (moves[i].score < bestScore) {\n        bestScore = moves[i].score;\n        bestMove = i;\n      }\n    }\n  }\n\n  return moves[bestMove];\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvdXRpbHMuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvdXRpbHMuanM/OTk0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwbGF5ZXJYID0gJ1gnO1xuY29uc3QgcGxheWVyTyA9ICdPJztcbmNvbnN0IHdpbkNvbWJvcyA9IFtcbiAgWzAsIDEsIDJdLFxuICBbMywgNCwgNV0sXG4gIFs2LCA3LCA4XSxcbiAgWzAsIDMsIDZdLFxuICBbMSwgNCwgN10sXG4gIFsyLCA1LCA4XSxcbiAgWzAsIDQsIDhdLFxuICBbNiwgNCwgMl1cbl07XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRGaWd1cmUgKHNxdWFyZUlkLCBwbGF5ZXIpIHtcbiAgY29uc3QgJGVsZW1lbnQgPSBjcmVhdGVGaWd1cmUocGxheWVyKTtcbiAgY29uc3QgJHNxdWFyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBzcXVhcmUtJHtzcXVhcmVJZH1gKTtcblxuICAkc3F1YXJlLmFwcGVuZENoaWxkKCRlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRmlndXJlIChwbGF5ZXIpIHtcbiAgY29uc3QgJGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICRlbC5jbGFzc05hbWUgPSBwbGF5ZXIgPT09IHBsYXllclggPyAnYm9hcmRfX2Nyb3NzJyA6ICdib2FyZF9fY2lyY2xlJztcblxuICByZXR1cm4gJGVsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNXb24gKGJvYXJkLCBwbGF5ZXIpIHtcbiAgY29uc3QgcGxheXMgPSBib2FyZC5yZWR1Y2UoKGEsIGUsIGkpID0+IHtcbiAgICByZXR1cm4gZSA9PT0gcGxheWVyID8gYS5jb25jYXQoaSkgOiBhO1xuICB9LCBbXSk7XG5cbiAgbGV0IGdhbWVXb24gPSBudWxsO1xuXG4gIGZvciAoY29uc3QgW2luZGV4LCB3aW5dIG9mIHdpbkNvbWJvcy5lbnRyaWVzKCkpIHtcbiAgICBpZiAod2luLmV2ZXJ5KGVsZW0gPT4gcGxheXMuaW5kZXhPZihlbGVtKSA+IC0xKSkge1xuICAgICAgZ2FtZVdvbiA9IHsgaW5kZXg6IGluZGV4LCBwbGF5ZXI6IHBsYXllciB9O1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGdhbWVXb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRFbXB0eVNxdWFyZXMgKGJvYXJkKSB7XG4gIHJldHVybiBib2FyZC5maWx0ZXIocyA9PiB0eXBlb2YgcyA9PT0gJ251bWJlcicpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QmVzdEJvdE1vdmUgKG5ld0JvYXJkKSB7XG4gIHJldHVybiBtaW5pbWF4KG5ld0JvYXJkLCBwbGF5ZXJPKS5pbmRleDtcbn1cblxuZnVuY3Rpb24gbWluaW1heCAobmV3Qm9hcmQsIHBsYXllcikge1xuICBjb25zdCBlbXB0eVNxdWFyZXMgPSBnZXRFbXB0eVNxdWFyZXMobmV3Qm9hcmQpO1xuICBjb25zdCBtb3ZlcyA9IFtdO1xuXG4gIGlmIChpc1dvbihuZXdCb2FyZCwgcGxheWVyWCkpIHtcbiAgICByZXR1cm4geyBzY29yZTogLTEwIH07XG4gIH0gZWxzZSBpZiAoaXNXb24obmV3Qm9hcmQsIHBsYXllck8pKSB7XG4gICAgcmV0dXJuIHsgc2NvcmU6IDEwIH07XG4gIH0gZWxzZSBpZiAoZW1wdHlTcXVhcmVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiB7IHNjb3JlOiAwIH07XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGVtcHR5U3F1YXJlcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IG1vdmUgPSB7fTtcbiAgICBsZXQgcmVzdWx0O1xuXG4gICAgbW92ZS5pbmRleCA9IG5ld0JvYXJkW2VtcHR5U3F1YXJlc1tpXV07XG4gICAgbmV3Qm9hcmRbZW1wdHlTcXVhcmVzW2ldXSA9IHBsYXllcjtcblxuICAgIGlmIChwbGF5ZXIgPT09IHBsYXllck8pIHtcbiAgICAgIHJlc3VsdCA9IG1pbmltYXgobmV3Qm9hcmQsIHBsYXllclgpO1xuICAgICAgbW92ZS5zY29yZSA9IHJlc3VsdC5zY29yZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gbWluaW1heChuZXdCb2FyZCwgcGxheWVyTyk7XG4gICAgICBtb3ZlLnNjb3JlID0gcmVzdWx0LnNjb3JlO1xuICAgIH1cblxuICAgIG5ld0JvYXJkW2VtcHR5U3F1YXJlc1tpXV0gPSBtb3ZlLmluZGV4O1xuXG4gICAgbW92ZXMucHVzaChtb3ZlKTtcbiAgfVxuXG4gIGxldCBiZXN0TW92ZTtcbiAgbGV0IGJlc3RTY29yZTtcblxuICBpZiAocGxheWVyID09PSBwbGF5ZXJPKSB7XG4gICAgYmVzdFNjb3JlID0gLTEwMDAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1vdmVzW2ldLnNjb3JlID4gYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IG1vdmVzW2ldLnNjb3JlO1xuICAgICAgICBiZXN0TW92ZSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGJlc3RTY29yZSA9IDEwMDAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb3Zlcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKG1vdmVzW2ldLnNjb3JlIDwgYmVzdFNjb3JlKSB7XG4gICAgICAgIGJlc3RTY29yZSA9IG1vdmVzW2ldLnNjb3JlO1xuICAgICAgICBiZXN0TW92ZSA9IGk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1vdmVzW2Jlc3RNb3ZlXTtcbn1cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/utils.js\n");

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