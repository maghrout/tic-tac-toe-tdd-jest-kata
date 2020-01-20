function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
}

Game.playerOne = "X";
Game.playerTwo = "O";

Game.prototype.setMarker = function(index) {
    if(this.board[index] === "") {
        this.board[index] = this.currentPlayer;
    } 

    this.currentPlayer = this.currentPlayer === Game.playerOne ? Game.playerTwo : Game.playerOne;
}


module.exports = Game;