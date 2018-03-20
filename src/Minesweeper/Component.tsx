import * as React from 'react';
import Cell, { CellProps } from '../Cell/Component';

interface Minesweeper {
    gameboardMatrix: CellProps[][];
}

interface MinesweeperProps {

}

interface MinesweeperState {
    gameState: string;
}

class Minesweeper extends React.Component<MinesweeperProps, MinesweeperState> {
    constructor (props: MinesweeperProps) {
        super(props);
        this.state = {
            gameState: 'You are alive'
        };

        this.gameboardMatrix = [];
        const arr = ['E', 'E', 'B'];

        for (let row = 0; row < 10; row++) {
            this.gameboardMatrix[row] = [];

            for (let column = 0; column < 10; column++) {
                const cellType = arr[Math.floor(Math.random() * arr.length)];
                this.gameboardMatrix[row][column] = {
                    type: cellType,
                    onClickHandler: this.onClickHandler,
                    row,
                    column
                };
            }
        }
    }

    onClickHandler = (row: number, column: number) => {
        if (this.gameboardMatrix[row][column].type === 'B') {
            this.setState({
                gameState: 'You died'
            });
        }
    }

    getGameState = () => {
        return this.state.gameState;
    }

    render () {
        return (
            <div>
                <p>{this.getGameState()}</p>
                {this.gameboardMatrix.map((cells, rowIndex) => {
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
    }
}

export default Minesweeper;
