import * as React from 'react';
import Cell, { CellProps } from '../Cell/Component';
import { get } from 'lodash';
import { CellType } from '../Cell/CellType';

interface Minesweeper {
    gameboardMatrix: CellProps[][];
}

interface MinesweeperProps {
    width: number;
    height: number;
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
        const arr = [CellType.Empty, CellType.Empty, CellType.Bomb];

        for (let row = 0; row < this.props.height; row++) {
            this.gameboardMatrix[row] = [];

            for (let column = 0; column < this.props.width; column++) {
                const cellType = arr[Math.floor(Math.random() * arr.length)];
                this.gameboardMatrix[row][column] = {
                    type: cellType,
                    onClickHandler: this.onClickHandler,
                    row,
                    column,
                    neighboringBombs: this.getNeighboringBombs(row, column)
                };
            }
        }
    }

    getNeighboringBombs (row: number, column: number) {
        let count = 0;

        // top left
        if (get(this.gameboardMatrix, [row - 1, column - 1, 'type']) === CellType.Bomb) {
            count++;
        }

        // top
        if (get(this.gameboardMatrix, [row - 1, column, 'type']) === CellType.Bomb) {
            count++;
        }

        // top right
        if (get(this.gameboardMatrix, [row - 1, column + 1, 'type']) === CellType.Bomb) {
            count++;
        }

        // left
        if (get(this.gameboardMatrix, [row, column - 1, 'type']) === CellType.Bomb) {
            count++;
        }

        // right
        if (get(this.gameboardMatrix, [row, column + 1, 'type']) === CellType.Bomb) {
            count++;
        }

        // bottom left
        if (get(this.gameboardMatrix, [row + 1, column + 1, 'type']) === CellType.Bomb) {
            count++;
        }
        
        // bottom
        if (get(this.gameboardMatrix, [row + 1, column, 'type']) === CellType.Bomb) {
            count++;
        }

        // bottom right
        if (get(this.gameboardMatrix, [row + 1, column + 1, 'type']) === CellType.Bomb) {
            count++;
        }

        return count;
    }

    onClickHandler = (row: number, column: number) => {
        if (this.gameboardMatrix[row][column].type === CellType.Bomb) {
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
