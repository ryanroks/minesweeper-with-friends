import { CellType } from '../Cell/CellType';

export const getHasBeenClicked = (state, row: number, column: number): boolean => {
    return state.gameBoard[row][column].hasBeenClicked;
};

export const getCellType = (state, row: number, column: number): CellType => {
    return state.gameBoard[row][column].type;
};
