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
}

class Cell extends React.Component<CellProps> {
    constructor (props: CellProps) {
        super(props);
    }

    onClickHandler = () => {
        this.props.onClickHandler(this.props.row, this.props.column);
    }

    render () {
        return (<div className="Cell" onClick={this.onClickHandler} />);
    }
}

export default Cell;
