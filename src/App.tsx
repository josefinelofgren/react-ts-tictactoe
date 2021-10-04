import React from 'react';
import useTicTacToe from './components/useTicTacToe';
import Start from './components/Start';
import Game from './components/Game';
import Info from './components/Info';
import Finnished from './components/Finnished';
import { Container } from 'react-bootstrap';

function App() {

  const game = useTicTacToe();

  return (
    <div className="App">
        <Container fluid>
            <h1 className='title fw-bold'>Tic Tac Toe</h1>
            { game.gameStatus === 'started' && <Info gameStatus={game.gameStatus} p1Score={game.p1Score} p2Score={game.p2Score} turn={game.turn} players={game.players} winner={game.winner} handleRestart={game.handleRestart}/>}
            { game.gameStatus === 'started' && <Game gameStatus={game.gameStatus} winner={game.winner} turn={game.turn} board={game.board} handleClick={game.handleClick} />}
            { game.gameStatus === 'created' && <Start handleStart={game.handleStart} />}
            { game.gameStatus === 'finnished' && <Info gameStatus={game.gameStatus} p1Score={game.p1Score} p2Score={game.p2Score} turn={game.turn} players={game.players} winner={game.winner} handleRestart={game.handleRestart}/>}
            { game.gameStatus === 'finnished' && <Game gameStatus={game.gameStatus} winner={game.winner} turn={game.turn} board={game.board} handleClick={game.handleClick} />}
        </Container>
    </div>
  );
}

export default App;
