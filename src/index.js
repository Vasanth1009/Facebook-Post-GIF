import ReactDOM from 'react-dom';
import { IconContext } from 'react-icons';
import { Provider } from 'react-redux';

import App from './App';
import store from './stores';
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <IconContext.Provider value={{ className: 'react-icons' }}>
      <App />
    </IconContext.Provider>
  </Provider>,
  document.getElementById('root')
);
