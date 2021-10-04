import React from 'react';
import Square from './Square';

interface Props {
    board: string[];
    turn: string;
    winner: string | null;
    gameStatus: string;
    handleClick(index: number): void;

}

function Game(props: Props){

    const { board, turn, winner, gameStatus, handleClick } = props; 

    const styles = {
        board: {
            display: 'grid',
            gridTemplateColumns:'repeat(3, 1fr)',
            width: '300px'
        }
    }

    return (
        <div className='game'>
            <div className={gameStatus === 'started' ? 'game-board is-active' : 'game-board'} style={styles.board}>
                {board.map((value, index) => {
                    return <Square value={value} turn={turn} key={index} index={index} handleClick={handleClick}/> 
                })}
            </div>
            <div className={gameStatus === 'finnished' ? 'winner is-active' : 'winner'}>
                The winner is 
            </div>
        </div>
    );
}

export default Game;