function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
}

Game.playerOne = "X";
Game.playerTwo = "O";

// Game.prototype.setMarker = function(index) {
//     if(this.board[index] === "") {
//         this.board[index] = this.currentPlayer;
//     } 

//     this.currentPlayer = this.currentPlayer === Game.playerOne ? Game.playerTwo : Game.playerOne;
// }

Game.prototype.trySetMarker = function(index) {
    if(this.board[index] !== "") return false;
    this.board[index] = this.currentPlayer;

    this.currentPlayer = this.currentPlayer === Game.playerOne ? Game.playerTwo : Game.playerOne;

    return true;
}


module.exports = Game;