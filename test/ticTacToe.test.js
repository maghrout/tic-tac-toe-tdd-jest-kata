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
        Game.playTurn(0);

        expect(Game.board[0]).toEqual("X");
    })

    it('When first player plays then it is second players turn', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);

        expect(Game.currentPlayer).toEqual("O");
    })

    it('When first player plays then second player plays it is first player again', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(1);

        expect(Game.currentPlayer).toEqual("X");
    })

    it('When first player plays then second player cant play on same position', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(0);

        expect(Game.board[0]).toEqual("X");
    })

    it('Player 1 wins in a row', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(4);
        Game.playTurn(1);
        Game.playTurn(3);
        Game.playTurn(2);

        expect(Game.winner).toEqual("X");
    })

    it('Player 2 wins in a row', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(4);
        Game.playTurn(1);
        Game.playTurn(3);
        Game.playTurn(7);
        Game.playTurn(5);

        expect(Game.winner).toEqual("O");
    })

    it('Player 1 wins in a column', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(1);
        Game.playTurn(3);
        Game.playTurn(5);
        Game.playTurn(6);

        expect(Game.winner).toEqual("X");
    })

    it('Player 1 wins in a diagonal', () => {
        var Game = new ticTacToe();
        Game.playTurn(0);
        Game.playTurn(1);
        Game.playTurn(4);
        Game.playTurn(3);
        Game.playTurn(8);

        expect(Game.winner).toEqual("X");
    })

    it('Player 1 and Player 2 tie', () => {
        var Game = new ticTacToe();
        Game.playTurn(1);
        Game.playTurn(0);
        Game.playTurn(2);
        Game.playTurn(4);
        Game.playTurn(8);
        Game.playTurn(5);
        Game.playTurn(3);
        Game.playTurn(6);
        Game.playTurn(7);

        expect(Game.tie).toEqual(true);
    })
})