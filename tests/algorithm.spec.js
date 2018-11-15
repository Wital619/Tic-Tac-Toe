import {
  getWinCombo, 
  checkWinner,
  getEmptySquares
} from '../src/js/algorithm';

describe('getWinCombo', () => {
  test('Should return array by passed index', () => {
    expect(getWinCombo(3)).toEqual([0, 3, 6]);
  });

  test('Should return error', () => {
    expect(() => getWinCombo(10)).toThrow();
  });
});

describe('checkWinner', () => {
  const firstBoard = [
    1, 2, 'O',
    'X', 'O', 'O',
    'X', 'X', 'X'
  ];

  const secondBoard = [
    1, 'O', 'O',
    'X', 'O', 'X',
    'X', 'O', 'X'
  ];

  const thirdBoard = [
    1, 'X', 3,
    4, 'O', 'O',
    7, 'X', 'X'
  ];

  test('Should return object with index of won combo and X as winner side', () => {
    expect(checkWinner(firstBoard, 'X'))
      .toEqual({
        winArrayIndex: 2,
        playerSide: 'X'
      });
  });

  test('Should return object with index of won combo and O as winner side', () => {
    expect(checkWinner(secondBoard, 'O'))
      .toEqual({
        winArrayIndex: 4,
        playerSide: 'O'
      });
  });

  test('Should return null', () => {
    expect(checkWinner(thirdBoard, 'X'))
      .toBeNull();

    expect(checkWinner(thirdBoard, 'O'))
      .toBeNull();
  });
});

describe('getEmptySquares', () => {
  const board = [
    0, 1, 2,
    3, 'X', 5,
    6, 7, 'O'
  ];

  test('Should return the array of empty squares', () => {
    expect(getEmptySquares(board)).toEqual([0, 1, 2, 3, 5, 6, 7]);
  });
});