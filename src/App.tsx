import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTicTacToe from './useTicTacToe';

function App() {

  const game = useTicTacToe();

  return (
    <div className="App">
      <h1>Tic Tac Toe</h1>
      <p>Game state - {game.gameStatus}</p>
    </div>
  );
}

export default App;
