import * as React from 'react';
import Minesweeper from './Minesweeper/Container';

class App extends React.Component {
    render() {
        return (
            <div>
                <Minesweeper width={20} height={20} />
            </div>
        );
    }
}

export default App;
