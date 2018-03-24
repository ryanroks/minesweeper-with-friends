import { ActionTypes } from './ActionTypes';

export const cellClicked = (row: number, column: number) => {
    return {
        type: ActionTypes.CellClicked,
        row,
        column
    };
};