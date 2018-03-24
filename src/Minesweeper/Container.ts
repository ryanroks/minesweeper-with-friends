import Minesweeper from './Component';
import { connect } from 'react-redux';

export enum GameState {
    Alive,
    Dead
}

const mapStateToProps = (state, ownProps) => ({
    width: ownProps.width,
    height: ownProps.height,
    gameboardMatrix: state.gameBoard,
    gameState: state.gameState
});

export default connect(mapStateToProps)(Minesweeper);