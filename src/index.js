import React from 'react';
import ReactDOM from 'react-dom';
import './main.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <header className="header">
      <div className="wrapper">
        <h1 className="header__title">I'll give you some jokes!</h1>
      </div>
    </header>

    <App />

    <footer>
      <small>By Roland Franke ;)</small>
    </footer>
  </React.StrictMode>, document.getElementById('root')
);
