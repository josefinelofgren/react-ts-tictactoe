/* eslint-disable import/no-anonymous-default-export */
import { useState, useEffect } from 'react';

interface ReturnValue {
    board: string[],
    turn: string,
    gameStatus: string,
    winner: string | null,
    players: string[],
    p1Score: number,
    p2Score: number,
    handleClick: (index: number) => void;
    handleRestart: () => void;
    handleStart: (players: string[]) => void;
}

export default (): ReturnValue => {

    const [board, setBoard] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState <string | null>(null);
    const [gameStatus, setGameStatus] = useState('created');
    const [players, setPlayers] = useState(['', '']);
    let p1Score = 0;
    let p2Score = 0;

    useEffect(() => {

        if(gameStatus !== 'started') return;

        const winningPositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        let winningPositionsIndex = 0;
        let winner: string | null = null;

        while(winningPositionsIndex < winningPositions.length && !winner) {
            const boardPositionsToCheck = winningPositions[winningPositionsIndex];
            const boardValuesToCheck = boardPositionsToCheck.map(
                (index) => board[index]
            );

            const checkingValue = boardValuesToCheck[0];
            const isFinnished = boardValuesToCheck.every(
                (value) => value === checkingValue && checkingValue
            );
            winner = !isFinnished ? null : checkingValue;
            winningPositionsIndex ++;
        }

        if (winner) {
            setWinner(winner === 'X' ? players[0] : players[1]);
            setGameStatus('finnished');
            
            return;
        }
        setGameStatus(board.filter((value) => !value).length ? 'started' : 'finnished');
    }, [board, players, gameStatus])

    const handleClick = (index:number): void => {
        if(index < 0 || index > 9 || winner) return;
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        setBoard(newBoard);
        const newTurn = turn === 'X' ? 'O' : 'X';
        setTurn(newTurn);
    }

    const handleStart = (players: string[]) => {
        setPlayers(players);
        setTurn('X');
        setGameStatus('started')
    };

    const handleRestart = () => {
        setBoard(Array(9).fill(''));
        setWinner('');
        setTurn('X');
        setGameStatus('started');
    }

    return { board, p1Score, p2Score, turn, players, gameStatus, winner, handleClick, handleRestart, handleStart }

}