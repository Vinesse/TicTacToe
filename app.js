var turn = "playerOne";
var container = document.getElementById("container");

function startGame() {
    turn = "playerOne";
    for (var i = 0; i < 9; i++) {
        var box = document.createElement("div");
        box.classList.add("box");
        box.classList.add("symbols");
        box.dataset.clicked = "false";
        box.onclick = function() {takeTurn(this)};
        container.appendChild(box);
        console.log(i);
    };
    document.getElementById("turn").innerHTML = "Player One, Begin.";
}

function switchTurn() {
    if (turn === "playerOne") {
        turn = "playerTwo";
    } else if (turn === "playerTwo") {
        turn = "playerOne";
    };
}

function takeTurn(el) {
    if (el.dataset.clicked === "false") {
        if (turn === "playerOne") {
            document.getElementById("turn").innerHTML = "Player Two's turn.";
            el.innerHTML = "X";
        } else if (turn === "playerTwo") {
            document.getElementById("turn").innerHTML = "Player One's turn.";
            el.innerHTML = "O";
        };
        el.dataset.clicked = "true";
        switchTurn();
    }
}

function reset() {
    container.innerHTML = "";
    startGame();
}

startGame()