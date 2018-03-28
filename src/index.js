import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App cat = {5} txt = "coming from prop text"/>,
  document.getElementById('root'));
registerServiceWorker();
