import React from 'react';
import {render} from 'react-dom';

// styles
import './index.css';

//components
import App from './components/App';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);