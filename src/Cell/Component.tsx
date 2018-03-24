import * as React from 'react';
import './styles.css';
import { CellType } from './CellType';

export interface CellProps {
    type: CellType;
    onClickHandler: (row: number, column: number) => void;
    row: number;
    column: number;
    neighboringBombs: number;
    hasBeenClicked: boolean;
}

const Cell: React.SFC<CellProps> = (props) => {
    const onClickHandler = () => {
        props.onClickHandler(props.row, props.column);
    };

    const getClassNames = () => {
        let classNames = 'Cell ';

        if (props.hasBeenClicked) {
            classNames += 'Cell--clicked';
        }

        return classNames;
    };

    const getCellValue = () => {
        if (props.hasBeenClicked && props.type === CellType.Bomb) {
            return 'X';
        }

        switch (props.hasBeenClicked) {
            case true:
                return props.neighboringBombs;
            default:
                return '.';
        }
    };

    return (
        <div className={getClassNames()} onClick={onClickHandler}>
            {getCellValue()}
        </div>
    );
};

export default Cell;
