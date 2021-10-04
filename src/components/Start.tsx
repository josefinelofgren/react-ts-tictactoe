import React, { useEffect, useState } from 'react';
import { Container, Button, Form } from 'react-bootstrap';

interface Props {
    handleStart(players: string[]): void;
}

function Start(props: Props){

    const { handleStart } = props;
    const [players, setPlayers] = useState(['', '']);

    const handleInput = (event: any, index: number) => {
        const newPlayers = [...players];
        newPlayers.splice(index, 1, event.target.value)
        setPlayers(newPlayers);
    }

    const handleSubmit = (event: any) => {
        event.preventDefault();
        handleStart(players);
    }


    return (
        <div className='start'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Player 1</Form.Label>
                    <Form.Control type='text' value={players[0]} onInput={(e) => handleInput(e, 0)} /><br /> 
                </Form.Group>
                <Form.Group>
                    <Form.Label>Player 2</Form.Label>
                    <Form.Control type='text' value={players[1]} onInput={(e) => handleInput(e, 1)} /><br /> 
                </Form.Group>
                <Button className='fw-bold mt-2' variant='light' type='submit'>Start game</Button>
            </Form>
        </div>
    );
}

export default Start;