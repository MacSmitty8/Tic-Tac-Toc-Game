var board;
var playerO = "O"
var playerX = "X";
var startPlayer = playerO;
var gameOver = false;
let myScore = 0;
let compScore = 0;
//the above are variables that will be used for the board and the players, as well as determining on whether or not the game is ongoing or not.
let restartBtn = document.getElementById('restartBtn')

//Below is a function that loads the game up when the window is opened and when the page is refreshed.
window.onload = function () {
    setGame();
}
//the function to set up the game
function setGame() {
    //this sets up the board. By having it be 3 different arrays, it'll show up on the webpage as empty boxes.
    board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
    ]
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let boxes = document.createElement('div');
            boxes.id = r.toString() + "-" + c.toString();
            boxes.classList.add("boxes");
            if (r == 0 || r == 1) {
                boxes.classList.add("h-line");
            }
            if (c == 0 || c == 1) {
                boxes.classList.add("v-line");
            }
            //the loops above set up the looks of the board, adding the horizontal and vertical lines so that there's three rows and three columns
            boxes.addEventListener('click', setBox)
            document.getElementById("board").append(boxes);
        } //this makes sure that the board is clickable.
    }
}
function setBox() {
    if (gameOver) {
        return;
        //this part makes the boxes un-clickable once the game ends. Otherwise they are clickable.
    }
    let tiles = this.id.split("-")
    let r = parseInt(tiles[0]);
    let c = parseInt(tiles[1]);

    if (board[r][c] != ' ') {
        return;
    } //This is responsible for making sure that once the boxes have been filled with either an X or an O they can't alternate between the two if clicked again.
    board[r][c] = startPlayer;
    this.innerText = startPlayer;

    if (startPlayer == playerO) {
        startPlayer = playerX;
    } else {
        startPlayer = playerO;
    }
    checkWinner()
}

function scoreTracker() {
    //this function will keep track of the score of how many wins a player has received
}

function restart() {
    //this function will reset the entire game. Both the board, and the score.
}

function rounds() {


}

function checkWinner() {
    //checks to see if there's three matching X's or )'s horizontally
    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let boxes = document.getElementById(r.toString() + "-" + i.toString());
                boxes.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }
    //Checks to see if there's three matches vertically
    for (let c = 0; c < 3; c++) {
        if (board[c][0] == board[c][1] && board[c][1] == board[c][2] && board[c][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let boxes = document.getElementById(r.toString() + "-" + c.toString());
                boxes.classList.add("winner");
            }
            gameOver = true;
            return;
        }
    }
    //Checks to see if there's any wins diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let boxes = document.getElementById(i.toString() + "-" + c.toString());
            boxes.classList.add("winner");
        }
        gameOver = true;
        return;
    }
}

