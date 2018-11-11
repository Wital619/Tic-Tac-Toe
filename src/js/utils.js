export function hide ($el) {
  $el.style.display = 'none';
}

export function show ($el, value = 'block') {
  $el.style.display = value;  
}

export function appendFigure (squareId, player) {
  const $element = createFigure(player);
  const $square = document.getElementById(`square-${squareId}`);

  $square.appendChild($element);
}

function createFigure (player) {
  const $el = document.createElement('div');
  $el.className = player === 'X' ? 'cross-element' : 'circle-element';

  return $el;
}