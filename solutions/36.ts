/*
    Leetcode
    - Task: https://leetcode.com/problems/valid-sudoku/
    - Solution: https://leetcode.com/problems/valid-sudoku/submissions/1236416325/

*/

function isValidSudoku(board: string[][]): boolean {
    // Rows and cols
    for(let i = 0; i < 9; i++) {
        const row : number[] = [];
        const col : number[] = [];
        for(let y = 0; y < 9; y++) {
            const rowNpos = Number(board[i][y]);
            const colNpos = Number(board[y][i]);
            //Check if already exists
            if(!isNaN(rowNpos) && row.includes(rowNpos)) return false;
            if(!isNaN(colNpos) && col.includes(colNpos)) return false;
            //Add if not exists
            row.push(rowNpos);
            col.push(colNpos);
        }
    }
    // Squares
    for(let i = 0; i < 9; i += 3) {
        for(let y = 0; y < 9; y += 3) {
            const square : number[] = [];
            for(let x = i; x < i+3; x++) {
                for(let z = y; z < y+3; z++) {
                    const squareNpos = Number(board[x][z]);
                    if(!isNaN(squareNpos) && square.includes(squareNpos)) return false;
                    square.push(squareNpos);
                }
            }
        }
    }
    return true;
};

const board =
    [
        ["5", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

const board2 =
    [
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ]

console.log(isValidSudoku(board)) // true
console.log(isValidSudoku(board2)) // false