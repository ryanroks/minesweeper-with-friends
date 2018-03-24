import { CellType } from './Cell/CellType';

interface GameboardMatrix {

}

export const createGameState = (height: number, width: number) => {
    // For now, this is how we will randomly put bombs in the game
    const arr = [CellType.Empty, CellType.Empty, CellType.Bomb];
    
    let gameboardMatrix: GameboardMatrix = [];
    for (let row = 0; row < height; row++) {
        gameboardMatrix[row] = [];

        for (let column = 0; column < width; column++) {
            const cellType = arr[Math.floor(Math.random() * arr.length)];
            gameboardMatrix[row][column] = {
                type: cellType,
                row,
                column
            };
        }
    }

    return gameboardMatrix;
};
