import { get } from 'lodash';
import { CellType } from '../Cell/CellType';

export const getNeighboringBombs = (state, row: number, column: number) => {
    const gameboardMatrix = state.gameBoard;
    let count = 0;

    // top left
    if (get(gameboardMatrix, [row - 1, column - 1, 'type']) === CellType.Bomb) {
        count++;
    }

    // top
    if (get(gameboardMatrix, [row - 1, column, 'type']) === CellType.Bomb) {
        count++;
    }

    // top right
    if (get(gameboardMatrix, [row - 1, column + 1, 'type']) === CellType.Bomb) {
        count++;
    }

    // left
    if (get(gameboardMatrix, [row, column - 1, 'type']) === CellType.Bomb) {
        count++;
    }

    // right
    if (get(gameboardMatrix, [row, column + 1, 'type']) === CellType.Bomb) {
        count++;
    }

    // bottom left
    if (get(gameboardMatrix, [row + 1, column + 1, 'type']) === CellType.Bomb) {
        count++;
    }
    
    // bottom
    if (get(gameboardMatrix, [row + 1, column, 'type']) === CellType.Bomb) {
        count++;
    }

    // bottom right
    if (get(gameboardMatrix, [row + 1, column + 1, 'type']) === CellType.Bomb) {
        count++;
    }

    return count;
};
