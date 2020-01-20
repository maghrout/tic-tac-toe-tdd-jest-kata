function Game() {
    this.board = ["","","","","","","","",""];
    this.currentPlayer = Game.playerOne;
    this.winner = "";
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

    this.checkBoardCondition();

    return true;
}

Game.prototype.checkBoardCondition = function() {
    for (var i = 0; i < 3; i++) {
        if(this.board[i] === this.currentPlayer) {
            this.winner = this.currentPlayer;
        }
    }

    // if(this.board[0] === "X" && this.board[1] === "X" && this.board[2] === "X") {
    //     this.winner = "X";
    // }
}


module.exports = Game;