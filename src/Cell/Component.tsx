import * as React from 'react';
import './styles.css';

interface Cell {
    type: string;
}

export interface CellProps {
    type: string;
    onClickHandler: (row: number, column: number) => void;
    row: number;
    column: number;
    neighboringBombs: number;
}

interface CellState {
    hasBeenClicked: boolean;
}

class Cell extends React.Component<CellProps, CellState> {
    constructor (props: CellProps) {
        super(props);

        this.state = {
            hasBeenClicked: false
        };
    }

    onClickHandler = () => {
        this.setState({
            hasBeenClicked: true
        });

        this.props.onClickHandler(this.props.row, this.props.column);
    }

    getClassNames = () => {
        let classNames = 'Cell ';

        if (this.state.hasBeenClicked) {
            classNames += 'Cell--clicked';
        }

        return classNames;
    }

    getCellValue = () => {
        if (this.state.hasBeenClicked && this.props.type === 'B') {
            return 'X';
        }
        
        switch (this.state.hasBeenClicked) {
            case true:
                return this.props.neighboringBombs;
            default:
                return '.';
        }
    }

    render () {
        return (
            <div className={this.getClassNames()} onClick={this.onClickHandler}>
                {this.getCellValue()}
            </div>
        );
    }
}

export default Cell;
