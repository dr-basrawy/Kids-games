const game = {
    xTurn: true,
    xState: [],
    oState: [],
    winningStates: [
        ['0', '1', '2'], // Rows
        ['3', '4', '5'],
        ['6', '7', '8'],
        ['0', '3', '6'], // Columns
        ['1', '4', '7'],
        ['2', '5', '8'],
        ['0', '4', '8'], // Diagonal
        ['2', '4', '6']
    ]
};
document.addEventListener('click', function (event) {
    const target = event.target;
    const isCell = target.classList.contains('grid-cell');
    const isDisabled = target.classList.contains('disabled');
    if (isCell && !isDisabled) {
        const cellValue = target.dataset.value;
        if (game.xTurn) {
            game.xState.push(cellValue);
        } else {
            game.oState.push(cellValue);
        }
        target.classList.add('disabled');
        target.classList.add(game.xTurn ? 'x' : 'o');
        game.xTurn = !game.xTurn;
        if (!document.querySelectorAll('.grid-cell:not(.disabled)').length) {
            showGameOverMessage('Draw!');
        }
        for (let i = 0; i < game.winningStates.length; i++) {
            const winningState = game.winningStates[i];
            let xWins = true;
            let oWins = true;
            for (let j = 0; j < winningState.length; j++) {
                const state = winningState[j];
                if (!game.xState.includes(state)) {
                    xWins = false;
                }
                if (!game.oState.includes(state)) {
                    oWins = false;
                }
            }
            if (xWins || oWins) {
                disableAllCells();
                showGameOverMessage(xWins ? 'X wins!' : 'O wins!');
                break;
            }
        }
    }
});
document.querySelector('.restart').addEventListener('click', function () {
    hideGameOverMessage();
    resetCells();
    resetGameState();
});
function showGameOverMessage(message) {
    const gameOverElement = document.querySelector('.game-over');
    const gameOverTextElement = document.querySelector('.game-over-text');
    gameOverElement.classList.add('visible');
    gameOverTextElement.textContent = message;
}
function hideGameOverMessage() {
    const gameOverElement = document.querySelector('.game-over');
    gameOverElement.classList.remove('visible');
}
function disableAllCells() {
    const cells = document.querySelectorAll('.grid-cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.classList.add('disabled');
    }
}
function resetCells() {
    const cells = document.querySelectorAll('.grid-cell');
    for (let i = 0; i < cells.length; i++) {
        const cell = cells[i];
        cell.classList.remove('disabled', 'x', 'o');
    }
}
function resetGameState() {
    game.xTurn = true;
    game.xState = [];
    game.oState = [];
}