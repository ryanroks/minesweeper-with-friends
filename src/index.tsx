import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducer';

interface MyWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION__: () => undefined;
}

let store = createStore(
  reducer,
  (window as MyWindow).__REDUX_DEVTOOLS_EXTENSION__ && (window as MyWindow).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
