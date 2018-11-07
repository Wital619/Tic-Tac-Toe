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

/***/ "./src/js/Game.js":
/*!************************!*\
  !*** ./src/js/Game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Player */ \"./src/js/Player.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ \"./src/js/utils.js\");\n\n\n\nclass Game {\n  constructor (humanSide, botSide) {\n    this.$board = document.querySelector('.board');\n    this.$pointsValues = document.querySelector('.points__values');\n    this.$winner = document.querySelector('.winner');\n\n    this.board = Array.from(Array(9).keys());\n\n    this.humanPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](humanSide);\n    this.botPlayer = new _Player__WEBPACK_IMPORTED_MODULE_0__[\"default\"](botSide);\n    this.tieScore = 0;\n\n    this.addElement = this.addElement.bind(this);\n\n    this.$board.addEventListener('click', e => this.addElement(e));\n\n    this.initButtons();\n\n    if (humanSide === 'O') {\n      this.makeMove(0, this.botPlayer.side);\n    }\n  }\n\n  initButtons () {\n    this.$btnLeave = document.querySelector('.btn--leave');\n    this.$btnNew = document.querySelector('.btn--new');\n    this.$btnResign = document.querySelector('.btn--resign');\n    this.$btnReset = document.querySelector('.btn--reset');\n\n    this.$btnResign.disabled = true;\n\n    this.$btnNew.addEventListener('click', () => this.newGame());\n    this.$btnReset.addEventListener('click', () => this.resetGameScore());\n    this.$btnResign.addEventListener('click', () =>\n      this.declareWinner(this.botPlayer.side)\n    );\n    this.$btnLeave.addEventListener('click', () =>\n      this.leaveGame(this.botPlayer.side)\n    );\n  }\n\n  resetGameScore () {\n    this.humanPlayer.score = 0;\n    this.botPlayer.score = 0;\n    this.tieScore = 0;\n\n    this.$pointsValues.children[0].textContent = 0;\n    this.$pointsValues.children[2].textContent = 0;\n    this.$pointsValues.children[1].textContent = 0;\n\n    this.$btnReset.disabled = true;\n  }\n\n  leaveGame () {\n    window.history.back();\n  }\n\n  newGame () {\n    this.board = Array.from(Array(9).keys());\n    this.resetSquares();\n\n    this.$btnNew.disabled = true;\n    this.$btnResign.disabled = true;\n    this.$btnReset.disabled = true;\n\n    this.$board.style.display = 'table';\n    this.$winner.style.display = 'none';\n  }\n\n  addElement (e) {\n    const squareId = e.target.id.slice(7);\n\n    if (typeof this.board[squareId] === 'number') {\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, this.botPlayer.side) && !this.isTie()) {\n        this.makeMove(squareId, this.humanPlayer.side);\n      }\n\n      if (!Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, this.humanPlayer.side) && !this.isTie()) {\n        this.makeMove(Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getBestBotMove\"])(this.board), this.botPlayer.side);\n      }\n    }\n  }\n\n  makeMove (squareId, player) {\t\t\n    if (typeof this.board[squareId] === 'number') {\n      this.board[squareId] = player;\n\n      Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"appendFigure\"])(squareId, player);\n    }\n\n    const gameWon = Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"isWon\"])(this.board, player);\n\n    if (gameWon) {\n      this.declareWinner(gameWon.player);\n    }\n\n    this.checkIfItFirstMove();\n  }\n\n  declareWinner (winner) {\n    const $winner = document.querySelector('.winner__result');\n\n    if (winner === this.humanPlayer.side) {\n      this.humanPlayer.score++;\n      this.$pointsValues.children[0].textContent = this.humanPlayer.score;\n      $winner.textContent = 'YOU WON !';\n    } else if (winner === this.botPlayer.side) {\n      this.botPlayer.score++;\n      this.$pointsValues.children[2].textContent = this.botPlayer.score;\n      $winner.textContent = 'YOU LOSE !';\n    } else {\n      this.tieScore++;\n      this.$pointsValues.children[1].textContent = this.tieScore;\n      $winner.textContent = 'TIE !';\n    }\n\n    this.$board.removeEventListener('click', this.addElement);\n\n    this.$btnLeave.disabled = true;\n    this.$btnResign.disabled = true;\n\n    setTimeout(() => {\n      this.$board.style.display = 'none';\n      this.$winner.style.display = 'flex';\n\n      this.$btnNew.disabled = false;\n      this.$btnLeave.disabled = false;\n      this.$btnReset.disabled = false;\n    }, 500);\n  }\n\n  resetSquares () {\n    const $squares = document.querySelectorAll('.board__item');\n\n    $squares.forEach($square => {\n      if ($square.firstElementChild) {\n        $square.removeChild($square.firstElementChild);\n      }\n    });\n  }\n\n  checkIfItFirstMove () {\n    const movesCount = this.board.filter(side => side === this.humanPlayer.side);\n\n    if (movesCount.length === 1) {\n      this.$btnResign.disabled = false;\n      this.$btnLeave.disabled = true;\n    }\n  }\n\n  isTie () {\n    if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__[\"getEmptySquares\"])(this.board).length === 0) {\n      this.declareWinner('Tie');\n\n      return true;\n    }\n\n    return false;\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvR2FtZS5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9HYW1lLmpzPzc5OTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBsYXllciBmcm9tICcuL1BsYXllcic7XG5pbXBvcnQge2dldEVtcHR5U3F1YXJlcywgaXNXb24sIGdldEJlc3RCb3RNb3ZlLCBhcHBlbmRGaWd1cmV9IGZyb20gJy4vdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IgKGh1bWFuU2lkZSwgYm90U2lkZSkge1xuICAgIHRoaXMuJGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkJyk7XG4gICAgdGhpcy4kcG9pbnRzVmFsdWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvaW50c19fdmFsdWVzJyk7XG4gICAgdGhpcy4kd2lubmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndpbm5lcicpO1xuXG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoOSkua2V5cygpKTtcblxuICAgIHRoaXMuaHVtYW5QbGF5ZXIgPSBuZXcgUGxheWVyKGh1bWFuU2lkZSk7XG4gICAgdGhpcy5ib3RQbGF5ZXIgPSBuZXcgUGxheWVyKGJvdFNpZGUpO1xuICAgIHRoaXMudGllU2NvcmUgPSAwO1xuXG4gICAgdGhpcy5hZGRFbGVtZW50ID0gdGhpcy5hZGRFbGVtZW50LmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLiRib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gdGhpcy5hZGRFbGVtZW50KGUpKTtcblxuICAgIHRoaXMuaW5pdEJ1dHRvbnMoKTtcblxuICAgIGlmIChodW1hblNpZGUgPT09ICdPJykge1xuICAgICAgdGhpcy5tYWtlTW92ZSgwLCB0aGlzLmJvdFBsYXllci5zaWRlKTtcbiAgICB9XG4gIH1cblxuICBpbml0QnV0dG9ucyAoKSB7XG4gICAgdGhpcy4kYnRuTGVhdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLS1sZWF2ZScpO1xuICAgIHRoaXMuJGJ0bk5ldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLW5ldycpO1xuICAgIHRoaXMuJGJ0blJlc2lnbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tLXJlc2lnbicpO1xuICAgIHRoaXMuJGJ0blJlc2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi0tcmVzZXQnKTtcblxuICAgIHRoaXMuJGJ0blJlc2lnbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICB0aGlzLiRidG5OZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLm5ld0dhbWUoKSk7XG4gICAgdGhpcy4kYnRuUmVzZXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnJlc2V0R2FtZVNjb3JlKCkpO1xuICAgIHRoaXMuJGJ0blJlc2lnbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+XG4gICAgICB0aGlzLmRlY2xhcmVXaW5uZXIodGhpcy5ib3RQbGF5ZXIuc2lkZSlcbiAgICApO1xuICAgIHRoaXMuJGJ0bkxlYXZlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT5cbiAgICAgIHRoaXMubGVhdmVHYW1lKHRoaXMuYm90UGxheWVyLnNpZGUpXG4gICAgKTtcbiAgfVxuXG4gIHJlc2V0R2FtZVNjb3JlICgpIHtcbiAgICB0aGlzLmh1bWFuUGxheWVyLnNjb3JlID0gMDtcbiAgICB0aGlzLmJvdFBsYXllci5zY29yZSA9IDA7XG4gICAgdGhpcy50aWVTY29yZSA9IDA7XG5cbiAgICB0aGlzLiRwb2ludHNWYWx1ZXMuY2hpbGRyZW5bMF0udGV4dENvbnRlbnQgPSAwO1xuICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IDA7XG4gICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gMDtcblxuICAgIHRoaXMuJGJ0blJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGxlYXZlR2FtZSAoKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICB9XG5cbiAgbmV3R2FtZSAoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5LmZyb20oQXJyYXkoOSkua2V5cygpKTtcbiAgICB0aGlzLnJlc2V0U3F1YXJlcygpO1xuXG4gICAgdGhpcy4kYnRuTmV3LmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRidG5SZXNpZ24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuJGJ0blJlc2V0LmRpc2FibGVkID0gdHJ1ZTtcblxuICAgIHRoaXMuJGJvYXJkLnN0eWxlLmRpc3BsYXkgPSAndGFibGUnO1xuICAgIHRoaXMuJHdpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9XG5cbiAgYWRkRWxlbWVudCAoZSkge1xuICAgIGNvbnN0IHNxdWFyZUlkID0gZS50YXJnZXQuaWQuc2xpY2UoNyk7XG5cbiAgICBpZiAodHlwZW9mIHRoaXMuYm9hcmRbc3F1YXJlSWRdID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKCFpc1dvbih0aGlzLmJvYXJkLCB0aGlzLmJvdFBsYXllci5zaWRlKSAmJiAhdGhpcy5pc1RpZSgpKSB7XG4gICAgICAgIHRoaXMubWFrZU1vdmUoc3F1YXJlSWQsIHRoaXMuaHVtYW5QbGF5ZXIuc2lkZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNXb24odGhpcy5ib2FyZCwgdGhpcy5odW1hblBsYXllci5zaWRlKSAmJiAhdGhpcy5pc1RpZSgpKSB7XG4gICAgICAgIHRoaXMubWFrZU1vdmUoZ2V0QmVzdEJvdE1vdmUodGhpcy5ib2FyZCksIHRoaXMuYm90UGxheWVyLnNpZGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1ha2VNb3ZlIChzcXVhcmVJZCwgcGxheWVyKSB7XHRcdFxuICAgIGlmICh0eXBlb2YgdGhpcy5ib2FyZFtzcXVhcmVJZF0gPT09ICdudW1iZXInKSB7XG4gICAgICB0aGlzLmJvYXJkW3NxdWFyZUlkXSA9IHBsYXllcjtcblxuICAgICAgYXBwZW5kRmlndXJlKHNxdWFyZUlkLCBwbGF5ZXIpO1xuICAgIH1cblxuICAgIGNvbnN0IGdhbWVXb24gPSBpc1dvbih0aGlzLmJvYXJkLCBwbGF5ZXIpO1xuXG4gICAgaWYgKGdhbWVXb24pIHtcbiAgICAgIHRoaXMuZGVjbGFyZVdpbm5lcihnYW1lV29uLnBsYXllcik7XG4gICAgfVxuXG4gICAgdGhpcy5jaGVja0lmSXRGaXJzdE1vdmUoKTtcbiAgfVxuXG4gIGRlY2xhcmVXaW5uZXIgKHdpbm5lcikge1xuICAgIGNvbnN0ICR3aW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2lubmVyX19yZXN1bHQnKTtcblxuICAgIGlmICh3aW5uZXIgPT09IHRoaXMuaHVtYW5QbGF5ZXIuc2lkZSkge1xuICAgICAgdGhpcy5odW1hblBsYXllci5zY29yZSsrO1xuICAgICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGhpcy5odW1hblBsYXllci5zY29yZTtcbiAgICAgICR3aW5uZXIudGV4dENvbnRlbnQgPSAnWU9VIFdPTiAhJztcbiAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gdGhpcy5ib3RQbGF5ZXIuc2lkZSkge1xuICAgICAgdGhpcy5ib3RQbGF5ZXIuc2NvcmUrKztcbiAgICAgIHRoaXMuJHBvaW50c1ZhbHVlcy5jaGlsZHJlblsyXS50ZXh0Q29udGVudCA9IHRoaXMuYm90UGxheWVyLnNjb3JlO1xuICAgICAgJHdpbm5lci50ZXh0Q29udGVudCA9ICdZT1UgTE9TRSAhJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWVTY29yZSsrO1xuICAgICAgdGhpcy4kcG9pbnRzVmFsdWVzLmNoaWxkcmVuWzFdLnRleHRDb250ZW50ID0gdGhpcy50aWVTY29yZTtcbiAgICAgICR3aW5uZXIudGV4dENvbnRlbnQgPSAnVElFICEnO1xuICAgIH1cblxuICAgIHRoaXMuJGJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hZGRFbGVtZW50KTtcblxuICAgIHRoaXMuJGJ0bkxlYXZlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiRidG5SZXNpZ24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLiRib2FyZC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgdGhpcy4kd2lubmVyLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG5cbiAgICAgIHRoaXMuJGJ0bk5ldy5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgdGhpcy4kYnRuTGVhdmUuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGJ0blJlc2V0LmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSwgNTAwKTtcbiAgfVxuXG4gIHJlc2V0U3F1YXJlcyAoKSB7XG4gICAgY29uc3QgJHNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmRfX2l0ZW0nKTtcblxuICAgICRzcXVhcmVzLmZvckVhY2goJHNxdWFyZSA9PiB7XG4gICAgICBpZiAoJHNxdWFyZS5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAkc3F1YXJlLnJlbW92ZUNoaWxkKCRzcXVhcmUuZmlyc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tJZkl0Rmlyc3RNb3ZlICgpIHtcbiAgICBjb25zdCBtb3Zlc0NvdW50ID0gdGhpcy5ib2FyZC5maWx0ZXIoc2lkZSA9PiBzaWRlID09PSB0aGlzLmh1bWFuUGxheWVyLnNpZGUpO1xuXG4gICAgaWYgKG1vdmVzQ291bnQubGVuZ3RoID09PSAxKSB7XG4gICAgICB0aGlzLiRidG5SZXNpZ24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuJGJ0bkxlYXZlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpc1RpZSAoKSB7XG4gICAgaWYgKGdldEVtcHR5U3F1YXJlcyh0aGlzLmJvYXJkKS5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuZGVjbGFyZVdpbm5lcignVGllJyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Game.js\n");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Game */ \"./src/js/Game.js\");\n\n\n\nconst $playWithCompBtn = document.querySelector('.btn-comp');\nconst $sidesBlock = document.querySelector('.sides');\n\n$playWithCompBtn.addEventListener('click', playWithComputer);\n\nfunction playWithComputer () {\n  const $header = document.querySelector('.header');\n  const $entry = document.querySelector('.entry');\n  const $sides = document.querySelectorAll('.sides__side');\n  \n  $sidesBlock.style.display = 'block';\n  $header.style.display = 'none';\n  $entry.style.display = 'none';\n\n  $sides.forEach($side => {\n    $side.addEventListener('click', selectSide);\n  });\n}\n\nfunction selectSide (e) {\n  const $mainGame = document.querySelector('.main-game');\n\n  const humanSide = e.currentTarget.getAttribute('data-side');\n  const botSide = humanSide === 'X' ? 'O' : 'X'; \n\n  $sidesBlock.style.display = 'none';\n  $mainGame.style.display = 'block';\n\n  new _Game__WEBPACK_IMPORTED_MODULE_1__[\"default\"](humanSide, botSide);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzPzkyOTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG5jb25zdCAkcGxheVdpdGhDb21wQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1jb21wJyk7XG5jb25zdCAkc2lkZXNCbG9jayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlcycpO1xuXG4kcGxheVdpdGhDb21wQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheVdpdGhDb21wdXRlcik7XG5cbmZ1bmN0aW9uIHBsYXlXaXRoQ29tcHV0ZXIgKCkge1xuICBjb25zdCAkaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcicpO1xuICBjb25zdCAkZW50cnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZW50cnknKTtcbiAgY29uc3QgJHNpZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGVzX19zaWRlJyk7XG4gIFxuICAkc2lkZXNCbG9jay5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgJGhlYWRlci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAkZW50cnkuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAkc2lkZXMuZm9yRWFjaCgkc2lkZSA9PiB7XG4gICAgJHNpZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWxlY3RTaWRlKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlbGVjdFNpZGUgKGUpIHtcbiAgY29uc3QgJG1haW5HYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZ2FtZScpO1xuXG4gIGNvbnN0IGh1bWFuU2lkZSA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2lkZScpO1xuICBjb25zdCBib3RTaWRlID0gaHVtYW5TaWRlID09PSAnWCcgPyAnTycgOiAnWCc7IFxuXG4gICRzaWRlc0Jsb2NrLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICRtYWluR2FtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcblxuICBuZXcgR2FtZShodW1hblNpZGUsIGJvdFNpZGUpO1xufVxuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/main.js\n");

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