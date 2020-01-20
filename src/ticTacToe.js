function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
    this.winner = "";
}

Game.winningConditions = [
    {cellOne: 0, cellTwo: 1, cellThree: 2},
    {cellOne: 3, cellTwo: 4, cellThree: 5}];

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