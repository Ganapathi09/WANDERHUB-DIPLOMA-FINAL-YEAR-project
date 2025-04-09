import React from 'react'
import './game.css'
import {Container, Row } from 'react-bootstrap'

export function NoWinner() {
  return (
    <Container>
      <Row>
        <h5 className="col-sm-6 col-md-6 col-lg-4 col-xl-6 col-xxl-5 ms-lg-auto text-center mt-5 winner1"> <span className='fs-1'>Match</span>  Draw! <span className='fs-1'> , please</span> Play Again...</h5>
      </Row>
    </Container>
  )
}

export function WinnerPlayer1() {

  return (
      <Container>
          <Row>
              <h5 className="col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-9 text-center mt-5 winner1">CONGRATULATIONS [ <span className='text-primary'>PLAYER 1 won the match</span> ]</h5>
          </Row>
      </Container>
  )
}

export function WinnerPlayer2() {
  return (
    <Container>
      <Row>
        <h5 className="col-sm-11 col-md-6 col-lg-5 col-xl-6 col-xxl-9  text-center mt-5 winner1">CONGRATULATIONS [ <span className='text-success'>PLAYER 2 won the match</span> ]</h5>
      </Row>
    </Container>
  )
}