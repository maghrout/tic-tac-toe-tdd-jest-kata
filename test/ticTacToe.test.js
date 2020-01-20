const game = require('../src/ticTacToe');

describe('Tic Tac Toe Test', () => {
    it('Passes', () => {
        var Game = new game();

        expect(Game.board.length).toEqual(9);
    })
})