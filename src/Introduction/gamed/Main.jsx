import { Button, Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import './game.css'
function Main(
  {
    reset, status, game, player1Click, player2Click,
    box1, box2, box3, box4, box5, box6, box7, box8, box9,
    setBox1, setBox2, setBox3, setBox4, setBox5, setBox6, setBox7, setBox8, setBox9, setStatus, setGame
  }
) {
  return (
    <div>
      <Container>
        <Row>

          {/* 3x3 Boxes Start */}
          <Col className='md-10 mt-5 game text-center' col={10} sm={10} md={8} lg={12}>
            <Col className='mt-5 box'>
              <Button id="gamebox1"
                className={
                  (box1 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box1 === "X" && box2 === "X" && box3 === "X") ||
                      (box1 === "O" && box2 === "O" && box3 === "O") ||
                      (box1 === "X" && box4 === "X" && box7 === "X") ||
                      (box1 === "O" && box4 === "O" && box7 === "O") ||
                      (box1 === "X" && box5 === "X" && box9 === "X") ||
                      (box1 === "O" && box5 === "O" && box9 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box1 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                // onClick={
                //     game === "" ? () => alert("Choose Your PLAYER !") : () => setBox1(game)
                // }
                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox1(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box1}
              </Button>

              <Button id="gamebox2"
                className={
                  (box2 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box1 === "X" && box2 === "X" && box3 === "X") ||
                      (box1 === "O" && box2 === "O" && box3 === "O") ||
                      (box2 === "X" && box5 === "X" && box8 === "X") ||
                      (box2 === "O" && box5 === "O" && box8 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box2 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox2(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box2}
              </Button>

              <Button id="gamebox3"
                className={
                  (box3 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box1 === "X" && box2 === "X" && box3 === "X") ||
                      (box1 === "O" && box2 === "O" && box3 === "O") ||
                      (box3 === "X" && box6 === "X" && box9 === "X") ||
                      (box3 === "O" && box6 === "O" && box9 === "O") ||
                      (box3 === "X" && box5 === "X" && box7 === "X") ||
                      (box3 === "O" && box5 === "O" && box7 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box3 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }
                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox3(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box3}
              </Button>
            </Col>

            <div className='mt-5 col box'>
              <Button id="gamebox4"
                className={
                  (box4 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box4 === "X" && box5 === "X" && box6 === "X") ||
                      (box4 === "O" && box5 === "O" && box6 === "O") ||
                      (box1 === "X" && box4 === "X" && box7 === "X") ||
                      (box1 === "O" && box4 === "O" && box7 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box4 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox4(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box4}
              </Button>

              <Button id="gamebox5"
                className={
                  (box5 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box4 === "X" && box5 === "X" && box6 === "X") ||
                      (box4 === "O" && box5 === "O" && box6 === "O") ||
                      (box2 === "X" && box5 === "X" && box8 === "X") ||
                      (box2 === "O" && box5 === "O" && box8 === "O") ||
                      (box1 === "X" && box5 === "X" && box9 === "X") ||
                      (box1 === "O" && box5 === "O" && box9 === "O") ||
                      (box3 === "X" && box5 === "X" && box7 === "X") ||
                      (box3 === "O" && box5 === "O" && box7 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box5 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }
                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox5(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box5}
              </Button>

              <Button id="gamebox6"
                className={
                  (box6 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box4 === "X" && box5 === "X" && box6 === "X") ||
                      (box4 === "O" && box5 === "O" && box6 === "O") ||
                      (box3 === "X" && box6 === "X" && box9 === "X") ||
                      (box3 === "O" && box6 === "O" && box9 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box6 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox6(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box6}
              </Button>
            </div>

            <div className='mt-5 mb-5 col box'>
              <Button id="gamebox7"
                className={
                  (box7 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box7 === "X" && box8 === "X" && box9 === "X") ||
                      (box7 === "O" && box8 === "O" && box9 === "O") ||
                      (box1 === "X" && box4 === "X" && box7 === "X") ||
                      (box1 === "O" && box4 === "O" && box7 === "O") ||
                      (box3 === "X" && box5 === "X" && box7 === "X") ||
                      (box3 === "O" && box5 === "O" && box7 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box7 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox7(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box7}
              </Button>

              <Button id="gamebox8"
                className={
                  (box8 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box7 === "X" && box8 === "X" && box9 === "X") ||
                      (box7 === "O" && box8 === "O" && box9 === "O") ||
                      (box2 === "X" && box5 === "X" && box8 === "X") ||
                      (box2 === "O" && box5 === "O" && box8 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box8 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox8(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box8}
              </Button>

              <Button id="gamebox9"
                className={
                  (box9 === "X" ?
                    'btn border border-dark text-info fs-3' :
                    'btn border border-dark text-danger fs-3') &&
                  (
                    (box7 === "X" && box8 === "X" && box9 === "X") ||
                      (box7 === "O" && box8 === "O" && box9 === "O") ||
                      (box3 === "X" && box6 === "X" && box9 === "X") ||
                      (box3 === "O" && box6 === "O" && box9 === "O") ||
                      (box1 === "X" && box5 === "X" && box9 === "X") ||
                      (box1 === "O" && box5 === "O" && box9 === "O") ?
                      'btn border border-dark btn-danger text-white fs-3' :
                      box9 === "X" ? 'btn border border-dark text-info fs-3' :
                        'btn border border-dark text-danger fs-3')
                }

                onClick={
                  game === "" ? () => alert("Choose Your PLAYER !") :
                    () => setBox9(game) ^ game === "X" ? (setStatus("Player2") ^ setGame("O")) :
                      game && (setStatus("Player1") ^ setGame("X"))
                }
              >
                {box9}
              </Button>
            </div>
          </Col>
          {/* 3x3 Boxes Finish */}

          {/* Player Buttons Start  */}
          <div className='col-6 ms-auto me-auto col-lg-2 mt-5'>
            <h5 style={{ whiteSpace: "nowrap", float: "right" }} className="fs-3 mb-3">Choose Your PLAYER!</h5>
            {
              status === "" &&
              <>
                <Button
                  variant='info'
                  className='players w-500'
                  style={{ width: "100%", height: "10%", fontSize: "20px" }}
                  onClick={player1Click}>
                  Player1
                </Button>

                <Button
                  variant='danger'
                  className='players mt-3 w-500'
                  style={{ width: "100%", height: "10%", fontSize: "20px" }}
                  onClick={player2Click}>
                  Player2
                </Button>
              </>
            }

            {
              status === "Player1" &&
              <>
                <Button
                  variant='info'
                  className='players w-500'
                  onClick={player1Click}>
                  Player1
                </Button>

                <Button
                  variant='danger'
                  className='players mt-3 w-500'
                  style={{ width: "100%", height: "10%", fontSize: "20px" }}
                  onClick={player2Click}>
                  Player2
                </Button>
              </>
            }

            {
              status === "Player2" &&
              <>
                <Button
                  variant='info'
                  className='players w-500'
                  style={{ width: "100%", height: "10%", fontSize: "20px" }}
                  onClick={player1Click}>
                  Player1
                </Button>

                <Button
                  variant='danger'
                  onClick={player2Click}>
                  Player2
                </Button>
              </>
            }

            <div
              className="player-status mb-3"
            >
              Player Status: {
                game === "X" ? <span className='text-info'> X</span> :
                  game === "O" ? <span className='text-danger'> O</span> :
                    <span className='fs-6 text-danger text-opacity-50'> None</span>}
            </div>

            <Button
              className=' btn btn-primary players w-500'
              variant='outline-warning'
              style={{ marginTop: "40%", marginBottom: "50%" }}
              onClick={reset}>
              Play Again
            </Button>

          </div>
          {/* Player Buttons Finish  */}

        </Row>
      </Container>
    </div>
  )
}

export default Main;