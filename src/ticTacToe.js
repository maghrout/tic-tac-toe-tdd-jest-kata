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
    if(this.board[0] === this.currentPlayer && this.board[1] === this.currentPlayer && this.board[2] === this.currentPlayer) {
        this.winner = this.currentPlayer;
    } else if(this.board[3] === this.currentPlayer && this.board[4] === this.currentPlayer && this.board[5] === this.currentPlayer) {
        this.winner = this.currentPlayer;
    }
}


module.exports = Game;