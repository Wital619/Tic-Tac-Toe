import {
  replacePlayerSide, 
  createFigure
} from '../src/js/utils';

describe('replacePlayerSide', () => {
  test('Should replace the passed side with the reverse side', () => {
    expect(replacePlayerSide('X')).toBe('O');
  });
});

describe('createFigure', () => {
  const isItFigureX = createFigure('X').classList.contains('cross-element');
  const isItFigureO = createFigure('O').classList.contains('circle-element');

  test('Should return true if element contains the class', () => {
    expect(isItFigureX).toBeTruthy();
    expect(isItFigureO).toBeTruthy();
  });
});