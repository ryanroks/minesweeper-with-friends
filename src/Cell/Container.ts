import { connect } from 'react-redux';
import Cell from './Component';
import { getNeighboringBombs } from '../selectors/computed';

const mapStateToProps = (state, ownProps) => {
    return {
        type: ownProps.type,
        row: ownProps.row,
        column: ownProps.column,
        neighboringBombs: getNeighboringBombs(state, ownProps.row, ownProps.column),
        hasBeenClicked: state.gameBoard[ownProps.row][ownProps.column].hasBeenClicked
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (row: number, column: number) => { 
            dispatch({
                type: 'CELL_CLICKED',
                row,
                column
            });
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
