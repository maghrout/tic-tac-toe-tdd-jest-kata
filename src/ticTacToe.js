function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
}

Game.playerOne = "X";
Game.playerTwo = "O";

Game.prototype.setMarker = function(marker, index) {
    this.board[index] = marker;

    this.currentPlayer = this.currentPlayer === Game.playerOne ? Game.playerTwo : Game.playerOne;
}


module.exports = Game;