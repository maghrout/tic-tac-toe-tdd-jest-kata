function Game() {
    this.board = ["","","","","","","","",""];
    this.playerOne = Game.playerOne;
}

Game.playerOne = "X"

Game.prototype.setMarker = function(marker, index) {
    this.board[index] = marker;
}


module.exports = Game;