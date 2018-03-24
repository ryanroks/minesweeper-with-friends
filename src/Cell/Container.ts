import { connect } from 'react-redux';
import Cell from './Component';
import { getNeighboringBombs } from '../selectors/computed';
import { getHasBeenClicked, getCellType } from '../selectors/gameboardSelectors';
import { cellClicked } from './actions';

const mapStateToProps = (state, ownProps) => ({
    row: ownProps.row,
    column: ownProps.column,
    neighboringBombs: getNeighboringBombs(state, ownProps.row, ownProps.column),
    hasBeenClicked: getHasBeenClicked(state, ownProps.row, ownProps.column),
    type: getCellType(state, ownProps.row, ownProps.column)
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClickHandler: (row: number, column: number) => {
            dispatch(cellClicked(row, column));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cell);
