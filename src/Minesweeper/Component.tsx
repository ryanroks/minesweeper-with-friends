import * as React from 'react';
import Cell from '../Cell/Container';
import { CellProps } from '../Cell/Component';
import { GameState } from './Container';

interface MinesweeperProps {
    gameboardMatrix: CellProps[][];
    gameState: GameState;
}

const Minesweeper: React.SFC<MinesweeperProps> = (props) => {
    const getGameState = (): string => {
        switch (props.gameState) {
            case GameState.Alive:
                return 'You are still alive';
            case GameState.Dead:
                return 'You are dead';
            default: 
                return 'Who knows?';
        }
    };

    return (
        <div>
            <p>{getGameState()}</p>
            {props.gameboardMatrix.map((cells, rowIndex) => {
                return cells.map((cell, cellIndex) => {
                    const cellKey = `${rowIndex}_${cellIndex}`;

                    if (cellIndex === cells.length - 1) {
                        return (
                            <span key={cellKey}>
                                <Cell {...cell} />
                                <br />
                            </span>
                        );
                    }

                    return (<Cell key={cellKey} {...cell} />);
                });
            })}
        </div>
    );
};

export default Minesweeper;
