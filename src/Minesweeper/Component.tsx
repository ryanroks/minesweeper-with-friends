import * as React from 'react';
import Cell from '../Cell/Container';
import { CellProps } from '../Cell/Component';
import { CellType } from '../Cell/CellType';

interface Minesweeper {

}

interface MinesweeperProps {
    width: number;
    height: number;
    gameboardMatrix: CellProps[][];
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
    }

    onClickHandler = (row: number, column: number) => {
        if (this.props.gameboardMatrix[row][column].type === CellType.Bomb) {
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
                {this.props.gameboardMatrix.map((cells, rowIndex) => {
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
