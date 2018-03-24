import { createGameState } from './helpers';
import { GameState } from './Minesweeper/Container';
import { ActionTypes } from './Cell/ActionTypes';

const defaultState = {
    gameState: GameState.Alive,
    gameBoard: {}
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case '@@INIT':
            return { ...state, gameBoard: createGameState(10, 10) };
        case ActionTypes.CellClicked:
            // this probably mutates state :X
            state.gameBoard[action.row][action.column].hasBeenClicked = true;
            return { ...state };
        default:
            return state;
    }
};
