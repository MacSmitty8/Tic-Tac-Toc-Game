var board;
var playerO = "O"
var playerX = "X";
var currentPlayer = playerO;
var gameOver = false;
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let currentPlayerScore = 0;
//the above are variables that will be used for the board and the players, as well as determining on whether or not the game is ongoing or not.
let restartBtn = document.getElementById('restartBtn')
let resetBoardBtn = document.getElementById('resetBoard')
const winMes = document.getElementById('winnerMessage')

//Below is a function that loads the game up when the window is opened and when the page is refreshed.
window.onload = function () {
    setBoard();
}

//the function to set up the board
board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
]
function setBoard() {
    //this sets up the board. By having it be 3 different arrays, it'll show up on the webpage as empty boxes.
    console.log("Set game running.");
    //debugger;

    let board = document.getElementById("board");
    board.addEventListener("click", () => {console.log('oooh that tickles')});
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
            //debugger;
            //the loops above set up the looks of the board, adding the horizontal and vertical lines so that there's three rows and three columns

            boxes.addEventListener('click', setGame);
            document.getElementById("board").append(boxes);
        } //this makes sure that the board is clickable.
    }
    //console.log(resetBoard())
    //document.getElementById("resetButton").addEventListener("click", resetBoard()); 
}
function setGame() {
    if (gameOver) {
        return;
        //this part makes the boxes un-clickable once the game ends. Otherwise they are clickable.
    }
    let tiles = this.id.split("-")
    let r = parseInt(tiles[0]);
    let c = parseInt(tiles[1]);

    if (board[r][c] != ' ') {
        return;
    } 
    //This is responsible for making sure that once the boxes have been filled with either an X or an O they can't alternate between the two if clicked again. Also cycles between the two players.
    board[r][c] = currentPlayer;
    this.innerText = currentPlayer;
    checkWinner()
    //Had to make sure the checkWinner function goes here, other wise it'll output a message the player who go after the next
    if (currentPlayer == playerO) {
        currentPlayer = playerX;
    } else {
        currentPlayer = playerO;
    }

}

function resetBoard() {
    //Completely clears the board
    const newBoard = document.getElementById("board");
    debugger;
    console.log(newBoard.firstChild);

    // const boardRE = document.getElementById("board")
    // console.log(boardRE);
    // boardRE.remove();
    // const newBoard = document.createElement("div")
    // newBoard.setAttribute("id", "board");
    // console.log(newBoard);
    // let boardGrabber = document.getElementById("board");
    // console.log(boardGrabber);
    // const resetButton = document.getElementById("resetButton"); 
    // console.log(resetButton);
    //setBoard();
    //boardGrabber.removeChild(boardGrabber.children)
}

function eraseBoardVisual() {
    //erases the boards visuals, specifically the X's and O's that were inputted.
    //game has win condition where the winning combination highlights the combination as green and makes the text white. Find a way to erase this as well.
    //reset the innerHTML elements and the box colors.
    let boardWidth = board[0].length
    let boardDepth = board.length

    for (let r = 0; r < boardDepth; r++) {
        for (let c = 0; c < boardWidth; c++) {
            //id is 0-0, 0-1, 0-2
            //.1-1
            //#r-c
            console.log(r)
            console.log(c)
            let tempBox = document.getElementById(`${r}-${c}`);
            tempBox.innerText = ' ';
            debugger;
            tempBox.classList.remove(".winner");
            tempBox.style.background = 'none';

            //document.getElementById(".winner").style.removeProperty("background-color");
        }
    }
    
}

function scoreTracker() {
    //this function will keep track of the score of how many wins a player has received, and will end the game if either player 
    //     if(firstPlayerScore === 2){
    //         document.querySelector(".").innerHTML = "Player 1 wins the game!";
    //     }
    //     if(secondPlayerScore === 2){
    //         document.querySelector(".").innerHTML = "Player 2 wins the game!";
    //     }
}

function restart() {
    //this function will reset the entire game. Both the board, and the score.
    location.reload();
}

function rounds() {
    //have a round counter, and set it to three, start it at 0. increase player score depending on wins. set the loop to see who wins, and once the round is equal to 2, the round will stop and the game will end.
    let roundCounter = 0;
    let playerOScore = new firstPlayerScore;
    let playerXScore = new secondPlayerScore;
    //Need to bring the value of firstPlayerScore and console log it.
    //
    document.querySelector(".p1-winCounter").innerHTML = `Rounds Won: ${playerOScore}`;
    document.querySelector(".p2-winCounter").innerHTML = `Rounds Won: ${PlayerXScore}`;
    currentPlayerScore++;
    // if (firstPlayerScore === 0) {
    //     checkWinner();
    //      currentPlayerScore++;
    document.querySelector(".p1-score").innerHTML = "1";
    //     console.log("Player O has 1 point!");
    // }
    // else if (firstPlayerScore === 2) {
    //     document.querySelector(".p1-score").innerHTML = "2";
    //     console.log("Player O has 2 points!");
    // }
    // if (secondPlayerScore === 1) {
    //     document.querySelector(".p2-score").innerHTML = "1";
    //     console.log("Player X has 1 point!");
    // }
    // else if (secondPlayerScore === 2) {
    //     document.querySelector(".p2score").innerHTML = "2";
    //     console.log("Player X has 2 points!");
    // }
    // else if (firstPlayerScore > 2 || secondPlayerScore > 2) {
    //     document.querySelector("").innerHTML = `Game Over. Thanks for playing!`;
    //     gameOver = true;
    //restart();
}



function checkWinner() {
    //checks to see if there's three matching X's or O's horizontally

    for (let r = 0; r < 3; r++) {
        if (board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' ') {
            for (let i = 0; i < 3; i++) {
                let boxes = document.getElementById(r.toString() + "-" + i.toString());
                boxes.classList.add("winner");
                //rounds();
            }
            gameOver = true;
            document.querySelector(".winnerMessage").innerHTML = `Player ${currentPlayer} wins!`;
            setTimeout(() => document.querySelector(".winnerMessage").remove(), 4000);
            console.log("Player", currentPlayer, "Wins!");
            // rounds(currentPlayer);
            return currentPlayer;

        }
    }
    //Checks to see if there's three matches vertically
    for (let c = 0; c < 3; c++) {
        if (board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' ') {
            for (let i = 0; i < 3; i++) {
                let boxes = document.getElementById(i.toString() + "-" + c.toString());
                boxes.classList.add("winner");
                //rounds();
            }
            gameOver = true;
            document.querySelector(".winnerMessage").innerHTML = `Player ${currentPlayer} wins!`;
            setTimeout(() => document.querySelector(".winnerMessage").remove(), 4000);
            console.log("Player", currentPlayer, "Wins!");
            setTimeout(eraseBoardVisual, 4000);
            return currentPlayer;
        }
    }
    //Checks to see if there's any wins diagonally
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' ') {
        for (let i = 0; i < 3; i++) {
            let boxes = document.getElementById(i.toString() + "-" + i.toString());
            boxes.classList.add("winner");
        }
        document.querySelector(".winnerMessage").innerHTML = `Player ${currentPlayer} wins!`;
        setTimeout(() => document.querySelector(".winnerMessage").remove(), 4000);
        console.log("Player", currentPlayer, "Wins!");
        gameOver = true;
        console.log("board has been erased");
        //setTimeout(() => {document.getElementById("boa").innerHTML = ' ', 6000);
        //setTimeout(setGame(), 8000);
        console.log("Board has been added")
        //setTimeout(document.querySelector(".boxes").innerHTML = " ", 3000);
        setTimeout(eraseBoardVisual, 4000);
        //rounds();
        return currentPlayer;
    }
    //Checks to see if there's three matches on the other side diagonally.
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' ') {

        let boxes = document.getElementById("0-2");
        boxes.classList.add("winner");

        boxes = document.getElementById("1-1");
        boxes.classList.add("winner");

        boxes = document.getElementById("2-0");
        boxes.classList.add("winner");

        document.querySelector(".winnerMessage").innerHTML = `Player ${currentPlayer} wins!`;
        setTimeout(() => document.querySelector(".winnerMessage").remove(), 4000);
        console.log("Player", currentPlayer, "Wins!");
        gameOver = true;
        setTimeout(eraseBoardVisual, 4000);
        return currentPlayer;
    }
    checkTie();

}

//Checks to see if there's no winner at all
function checkTie() {
    let count = 0;
    for (let r = 0; r < 3; r++) {
        for (c = 0; c < 3; c++) {
            if (board[r][c] != ' ') {
                count++;
            }
        }
    }

    if (count == 9) {
        for (let r = 0; r < 3; r++) {
            for (c = 0; c < 3; c++) {
                let t = document.getElementById(r.toString() + "-" + c.toString());
                t.classList.add('tie');
            }
        }
        document.querySelector(".winnerMessage").innerHTML = `Tie!`;
        setTimeout(() => document.querySelector(".winnerMessage").remove(), 4000);
        console.log("Tie!")
        gameOver = true;
        setTimeout(eraseBoardVisual, 4000);
    }
}

function eraseBoard() {
    //document.querySelector(".boxes").innerHTML = "";
    //boxes.classList.add("boxes");
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            let boxes = document.createElement('div');
            boxes.id = r.toString() + "-" + c.toString();
            if (r == 0 || r == 1) {
                boxes.classList.add("h-line");
            }
            if (c == 0 || c == 1) {
                boxes.classList.add("v-line");
            }
            //the loops above set up the looks of the board, adding the horizontal and vertical lines so that there's three rows and three columns
            boxes.addEventListener('click', setGame)
            document.getElementById("board").append(boxes);
        }

    }
}    