import Minesweeper from './Component';
import { connect } from 'react-redux'; 

const mapStateToProps = (state, ownProps) => {
    return {
        width: ownProps.width,
        height: ownProps.height,
        gameboardMatrix: state.gameBoard || []
    };
};

export default connect(mapStateToProps)(Minesweeper);