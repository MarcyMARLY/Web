import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import SearchList from './SearchList';
import Items from './Items';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
  <App />
  </div>,
   document.getElementById('root'));
registerServiceWorker();
