function Game() {
    this.board = ["","","","","","","","",""];
    this.playerOne = Game.playerOne;
    this.currentPlayer = "O";
}

Game.playerOne = "X"

Game.prototype.setMarker = function(marker, index) {
    this.board[index] = marker;

}


module.exports = Game;