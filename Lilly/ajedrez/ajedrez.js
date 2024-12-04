const boardElement = document.getElementById('board');
let board = [];
let selectedPiece = null;

function initializeBoard() {
    board = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['', '', '', '', '', '', '', ''],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];
}

function createBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement('div');
            square.className = 'square';
            square.classList.add((row + col) % 2 === 0 ? 'white' : 'black');
            square.dataset.row = row;
            square.dataset.col = col;
            square.addEventListener('click', handleSquareClick);
            boardElement.appendChild(square);
            renderPiece(row, col);
        }
    }
}

function renderPiece(row, col) {
    const square = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    square.textContent = board[row][col];
}

function handleSquareClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    if (selectedPiece) {
        if (movePiece(selectedPiece.row, selectedPiece.col, row, col)) {
            selectedPiece = null;
            renderBoard();
        }
    } else {
        selectedPiece = {row, col, piece: board[row][col]};
    }
}

function renderBoard() {
    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            renderPiece(row, col);
        }
    }
}

function movePiece(fromRow, fromCol, toRow, toCol) {
    const piece = board[fromRow][fromCol].toLowerCase();
    switch (piece) {
        case 'p':
            return movePawn(fromRow, fromCol, toRow, toCol);
        case 'r':
            return moveRook(fromRow, fromCol, toRow, toCol);
        case 'n':
            return moveKnight(fromRow, fromCol, toRow, toCol);
        case 'b':
            return moveBishop(fromRow, fromCol, toRow, toCol);
        case 'q':
            return moveQueen(fromRow, fromCol, toRow, toCol);
        case 'k':
            return moveKing(fromRow, fromCol, toRow, toCol);
        default:
            return false;
    }
}

function movePawn(fromRow, fromCol, toRow, toCol) {
    // Implement pawn movement rules
    // For simplicity, only forward movement without capture is implemented
    const direction = board[fromRow][fromCol] === 'p' ? 1 : -1;
    if (fromCol === toCol && board[toRow][toCol] === '' && toRow - fromRow === direction) {
        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = '';
        return true;
    }
    return false;
}

function moveRook(fromRow, fromCol, toRow, toCol) {
    // Implement rook movement rules
    if (fromRow === toRow || fromCol === toCol) {
        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = '';
        return true;
    }
    return false;
}

function moveKnight(fromRow, fromCol, toRow, toCol) {
    // Implement knight movement rules
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    if ((rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2)) {
        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = '';
        return true;
    }
    return false;
}

function moveBishop(fromRow, fromCol, toRow, toCol) {
    // Implement bishop movement rules
    if (Math.abs(fromRow - toRow) === Math.abs(fromCol - toCol)) {
        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = '';
        return true;
    }
    return false;
}

function moveQueen(fromRow, fromCol, toRow, toCol) {
    // Implement queen movement rules
    if (moveRook(fromRow, fromCol, toRow, toCol) || moveBishop(fromRow, fromCol, toRow, toCol)) {
        return true;
    }
    return false;
}

function moveKing(fromRow, fromCol, toRow, toCol) {
    // Implement king movement rules
    const rowDiff = Math.abs(fromRow - toRow);
    const colDiff = Math.abs(fromCol - toCol);
    if (rowDiff <= 1 && colDiff <= 1) {
        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = '';
        return true;
    }
    return false;
}

document.addEventListener('DOMContentLoaded', () => {
    initializeBoard();
    createBoard();
});
