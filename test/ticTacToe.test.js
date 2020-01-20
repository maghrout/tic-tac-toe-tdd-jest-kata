const ticTacToe = require('../src/ticTacToe');

describe('Tic Tac Toe Test', () => {
    it('Creates new empty board', () => {
        var Game = new ticTacToe();

        expect(Game.board.length).toEqual(9);
    })

    it('Creates first player as X', () => {
        var Game = new ticTacToe();

        expect(Game.currentPlayer).toEqual("X");
    })

    it('First player can place an X', () => {
        var Game = new ticTacToe();
        Game.setMarker("X", 0);

        expect(Game.board[0]).toEqual("X");
    })

    it('When first player plays then it is second players turn', () => {
        var Game = new ticTacToe();
        Game.setMarker("X", 0);

        expect(Game.currentPlayer).toEqual("O");
    })
})