import { createGameState } from './helpers';

export default (state, action) => {
    switch (action.type) {
        case '@@INIT':
            return { ...state, gameBoard: createGameState(10, 10) };
        case 'CELL_CLICKED':
            // this probably mutates state :X
            state.gameBoard[action.row][action.column].hasBeenClicked = true;
            return { ...state };
        default:
            return state;
    }
};
