let playerText =document.getElementById('playerText');
let restartButtom = document.getElementById('restartButtom');
let boxes = Array.from(document.getElementsByClassName('box'));



const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked));
    console.log();
}

function boxClicked(e) {
    const id = e.target.id;

    if(!spaces[id]){
        spaces[id] = currentPlayer;
        e.target.innerText = curentPlayer;
    }

    else if(playerHasWon() !==flase){
        playerText = $(currentPlayer);
        let winning_blocks = playerHasWon();

        winning_blocks.map (box => boxes[box].style.backgroundColor=winnerIndicator)
        return
    }

    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT;
}

const winningCombination = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
]

function playerHasWon() {
    for (const condition of winningCombination) {
        let [a,b,c] = condition;

        if(spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a,b,c]
        }
    }
    return false
}