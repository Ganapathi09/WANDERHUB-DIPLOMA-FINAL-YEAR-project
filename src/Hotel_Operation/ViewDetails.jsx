import React from 'react'
import { Button, Modal, Carousel } from 'react-bootstrap'

export default function ViewDetails(props) {
  return (
    <>
      <Modal show={props.show} onHide={props.Close} size='lg'>
        <Modal.Header>
          <Modal.Title>{props.roomname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Carousel prevLabel='' nextLabel=''>
            {
              props.imageurls.map(url => {
                return <Carousel.Item interval={1500}>
                  <img className='d-block w-100 bigimg' src={url} alt="Welcome to our Hotel Brindavan" />
                </Carousel.Item>
              })
            }
          </Carousel>
          <p>{props.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={props.Close}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}
