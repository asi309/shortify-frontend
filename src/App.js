import React from 'react';

import Url from './components/shortenUrl';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="title">Shortify</h1>
      <h2 className="sub-heading">Shorten your URLs</h2>
      <Url />
    </div>
  );
}

export default App;
