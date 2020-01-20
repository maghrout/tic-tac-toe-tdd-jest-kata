function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
    this.winner = "";
    this.tie = false;
}

Game.winningConditions = [
    {cellOne: 0, cellTwo: 1, cellThree: 2},
    {cellOne: 3, cellTwo: 4, cellThree: 5},
    {cellOne: 6, cellTwo: 7, cellThree: 8},
    {cellOne: 0, cellTwo: 3, cellThree: 6},
    {cellOne: 1, cellTwo: 4, cellThree: 7},
    {cellOne: 2, cellTwo: 5, cellThree: 8},
    {cellOne: 0, cellTwo: 4, cellThree: 8},
    {cellOne: 2, cellTwo: 4, cellThree: 6}
];

Game.playerOne = "X";
Game.playerTwo = "O";

Game.prototype.playTurn = function(index) {
    if(this.board[index] === "") {
        this.board[index] = this.currentPlayer;
        this.checkBoardCondition();

        this.currentPlayer = this.currentPlayer === Game.playerOne ? Game.playerTwo : Game.playerOne;
    }
}

Game.prototype.checkBoardCondition = function() {
    Game.winningConditions.forEach(row => {
        this.checkCondition(this.getCell(row.cellOne), this.getCell(row.cellTwo), this.getCell(row.cellThree));
    });

    if(this.board.indexOf("") === -1) {
        this.tie = true;
    }
}

Game.prototype.getCell = function(index) {
    return this.board[index];
}

Game.prototype.checkCondition = function(cellOne, cellTwo, cellThree) {
    if(cellOne === this.currentPlayer && cellTwo === this.currentPlayer && cellThree === this.currentPlayer) {
        this.winner = this.currentPlayer;
    }
}

module.exports = Game;