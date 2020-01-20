function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
}

Game.playerOne = "X";
Game.playerTwo = "O";

Game.prototype.setMarker = function(marker, index) {
    this.board[index] = marker;

    if(this.currentPlayer === Game.playerOne) {
        this.currentPlayer = Game.playerTwo;
    }
}


module.exports = Game;