import '../scss/main.scss';
import Game from './Game';

const $playWithCompBtn = document.querySelector('.btn-comp');
const $sidesBlock = document.querySelector('.sides');

$playWithCompBtn.addEventListener('click', playWithComputer);

function playWithComputer () {
  const $header = document.querySelector('.header');
  const $entry = document.querySelector('.entry');
  const $sides = document.querySelectorAll('.sides__side');
  
  $sidesBlock.style.display = 'block';
  $header.style.display = 'none';
  $entry.style.display = 'none';

  $sides.forEach($side => {
    $side.addEventListener('click', selectSide);
  });
}

function selectSide (e) {
  const $mainGame = document.querySelector('.main-game');

  const humanSide = e.currentTarget.getAttribute('data-side');
  const botSide = humanSide === 'X' ? 'O' : 'X'; 

  $sidesBlock.style.display = 'none';
  $mainGame.style.display = 'block';

  new Game(humanSide, botSide);
}
