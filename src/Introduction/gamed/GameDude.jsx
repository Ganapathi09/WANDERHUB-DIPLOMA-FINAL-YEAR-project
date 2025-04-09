import React, { useState } from 'react';
import './game.css'
// COMPONENTS 
import Main from './Main';
import FinalResult from './FinalResult';

function GameDude() {

    const [game, setGame] = useState("");
    const [status, setStatus] = useState("");


    const [box1, setBox1] = useState(game);
    const [box2, setBox2] = useState(game);
    const [box3, setBox3] = useState(game);

    const [box4, setBox4] = useState(game);
    const [box5, setBox5] = useState(game);
    const [box6, setBox6] = useState(game);

    const [box7, setBox7] = useState(game);
    const [box8, setBox8] = useState(game);
    const [box9, setBox9] = useState(game);


    // PLAYER 1 BUTTON 
    const player1Click = () => {
        setStatus("Player1");
        setGame("X");
    }

    // PLAYER 2 BUTTON 
    const player2Click = () => {
        setStatus("Player2");
        setGame("O");
    }

    // PLAY AGAIN BUTTON 
    const reset = () => {
        setGame("");
        setStatus("");
        setBox1("");
        setBox2("");
        setBox3("");
        setBox4("");
        setBox5("");
        setBox6("");
        setBox7("");
        setBox8("");
        setBox9("");
    }

    return (
        <div>

            <FinalResult
                box1={box1} box2={box2} box3={box3}
                box4={box4} box5={box5} box6={box6}
                box7={box7} box8={box8} box9={box9}
            />

            <Main
                reset={reset} status={status} game={game} setGame={setGame} setStatus={setStatus}
                player1Click={player1Click} player2Click={player2Click}
                box1={box1} box2={box2} box3={box3}
                box4={box4} box5={box5} box6={box6}
                box7={box7} box8={box8} box9={box9}
                setBox1={setBox1} setBox2={setBox2} setBox3={setBox3}
                setBox4={setBox4} setBox5={setBox5} setBox6={setBox6}
                setBox7={setBox7} setBox8={setBox8} setBox9={setBox9}
            />

        </div>
    )
}

export default GameDude;