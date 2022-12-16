let restartBtn = document.getElementById('restartBtn');
let boxes = Array.from(document.getElementsByClassName('box'))

let O_TEXT = "O";
let X_TEXT = "X";

let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let count_plays = 0

let startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}

function boxClicked(e) {
    const id = e.target.id

    if (!spaces[id] && count_plays < 9) {
        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        if (playerHasWon() !== false) {
            let changeFrase = document.getElementById("mainFrase");
            changeFrase.innerHTML = `Player ${currentPlayer} won!`;
            let winning_blocks = playerHasWon();
            count_plays = 10;
        }
        count_plays++
        currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT

    }

    if (count_plays === 9) {
        let changeFrase = document.getElementById("mainFrase");
        changeFrase.innerHTML = "Its a Tie!";
    }

}



let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

function playerHasWon() {
    for (const condition of winningCombos) {
        let [a, b, c] = condition

        if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
            return [a, b, c]
        }
    }
    return false
}

restartBtn.addEventListener('click', restart)

function restart() {
    let changeFrase = document.getElementById("mainFrase");
    changeFrase.innerHTML = "Make your move challenger!";
    spaces.fill(null)
    count_plays = 0
    boxes.forEach(box => {
        box.innerText = ''

    })



    currentPlayer = X_TEXT
}


startGame()