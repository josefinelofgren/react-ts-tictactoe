import {useState, useEffect } from "react";

// RetrunValue är interfacet som typar vad som skall returneras från funktionen.

interface ReturnValue {
    board: string[],
    gameStatus: string,
    winner: string | null,
    handleClick: (index: number) => void;
    handleRestart: () => void;
    handleStart: (players: string[]) => void;
}

export default (): ReturnValue => {

    const [board, setBoard] = useState(Array(9).fill(""));
    const [turn, setTurn] = useState("X");
    const [winner, setWinner] = useState <string | null>(null);
    const [gameStatus, setGameStatus] = useState("created");
    const [players, setPlayers] = useState(["", ""]);

    useEffect(() => {

        // useEffect körs om något av våra states board, gameStatus eller players ändras.
        // dvs tex när vi har sparat våra två spelare och spelt startas av callback
        // Eller efter att någon spelare har klickat i en ruta

        if (gameStatus !== "started") return;

        const winningPositions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        // Här sätter vi spelplanet till 0 (dvs det finns inga klick) Och ingen vinnare.
        let winningPositionsIndex = 0;
        let winner: string | null = null;

        // Så länge vi inte har sparat 9 klick, eller ingen har vunnit så körs while loopen

        while (winningPositionsIndex < winningPositions.length && !winner) {
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
            setWinner(winner === "X" ? players[0] : players[1]);
            setGameStatus("finnished");
            return;
        }
        setGameStatus(board.filter((value) => !value).length ? "started" : "Finnsished");
    

    }, [board, players, gameStatus])

    const handleClick = (index: number): void => {
        if (index < 0 || index > 9 || winner) return;
        const newBoard = [...board];
        newBoard.splice(index, 1, turn);
        setBoard(newBoard);

        // Med turn togglar vi vilken spelares tur det är att klicka, dvs om X eller O skall ritas ut.
        // Vi sätter det i state så att via callback Square vet vad som skall ritas ut.
        const newTurn = turn === "X" ? "O" : "X";
        setTurn(newTurn);
    };

    const handleStart = (players: string[]) => {
        setPlayers(players);
        setTurn("X");
        setGameStatus("started")
    };

    const handleRestart = () => {
        setBoard(Array(9).fill(""));
        setWinner("");
        setGameStatus("created");
    }
  
    // När funktinen kallas via App.tsx så returnerar vi alla state samt våra callbackfunktioner.
    return { board, gameStatus, winner, handleClick, handleRestart, handleStart}
}