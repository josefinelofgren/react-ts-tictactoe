import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    players: string[];
    p1Score: number;
    p2Score: number;
    turn: string;
    winner: string | null;
    gameStatus: string;
    handleRestart(): void;
}

function Info(props: Props){

    const { players, p1Score, p2Score, turn, winner, gameStatus, handleRestart } = props; 

    return (
        <div className='game-info'>
            <div className='game-info-grid'>
            <div className={turn === 'X' ? 'player-info winner' : 'player-info'}>
                    <span className='font'>X</span> - <span className='player-name'>{players[0]} - {p1Score}</span>
                </div>
                <div className={turn === 'O' ? 'player-info winner' : 'player-info'}>
                    <span className='font'>O</span> - <span className='player-name'>{players[1]} - {p2Score} </span>
                </div>
                <Button onClick={handleRestart} className={gameStatus === 'finnished' ? 'info-btn fw-bold mt-4 is-active' : 'info-btn fw-bold mt-4' } variant='light' type='submit'>Restart game</Button>
            </div>
        </div>
    );
}

export default Info;