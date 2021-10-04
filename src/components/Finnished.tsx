import React from 'react';
import { Button } from 'react-bootstrap';

interface Props {
    players: string[];
    turn: string;
    winner: string | null;
    handleRestart(): void;
}

function Finnished(props: Props){

    const { players, turn, winner, handleRestart } = props; 

    return (
        <div className='game-info'>
            <div className='game-info-grid'>
                <div className={turn === 'X' ? 'player-info winner' : 'player-info'}>
                    <span className='font'>X</span> - <span className='player-name'>{players[0]}</span>
                </div>
                <div className={turn === 'O' ? 'player-info winner' : 'player-info'}>
                    <span className='font'>O</span> - <span className='player-name'>{players[1]}</span>
                </div>
            </div>
            <Button onClick={handleRestart} className='fw-bold mt-4' variant='light' type='submit'>Restart game</Button>
        </div>
    );
}

export default Finnished;