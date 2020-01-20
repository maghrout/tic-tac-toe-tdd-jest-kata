function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
    this.winner = "";
}

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
    this.checkRow(this.getCell(0), this.getCell(1), this.getCell(2));
    this.checkRow(this.getCell(3), this.getCell(4), this.getCell(5));
}

Game.prototype.getCell = function(index) {
    return this.board[index];
}

Game.prototype.checkRow = function(cellOne, cellTwo, cellThree) {
    if(cellOne === this.currentPlayer && cellTwo === this.currentPlayer && cellThree === this.currentPlayer) {
        this.winner = this.currentPlayer;
    }
}


module.exports = Game;