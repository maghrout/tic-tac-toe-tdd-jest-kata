function Game() {
    this.board = ["","","","","","","","",""];
    this.playerOne = "X";
}

Game.prototype.setMarker = function(marker, index) {
    this.board[index] = marker;
}


module.exports = Game;