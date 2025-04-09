import React, { useState } from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import '../index.css'
import ViewDetails from './ViewDetails'
import { Link } from 'react-router-dom'

export default function Room({ room, fromDate, toDate }) {
  const [viewshow, setViewShow] = useState(false)
  const handleViewShow = () => setViewShow(true)
  const handleViewClose = () => setViewShow(false)

  return (
    <Row className='room-component'>
      <Col className="md-4">
        <img src={room.imageurls[0]} className='small-img' alt="Welcome to Hotel Brindavan" />
      </Col>
      <Col className="md-7 text-left">
        <p className="room-info">
          <h3>{room.name}</h3>
          <p className='small'> {room.facilities}                      </p><br />
          <strong className=''> Max Count:{room.maxcount}         </strong><br />
          <strong className=''> Phone Number:{room.phonenumber}   </strong><br />
          <strong className=''> Type:{room.type}                  </strong><br />
        </p>
        <div style={{ float: 'right' }} className='btn btn-group'>
          {(fromDate && toDate) && (
            <Link to={`/book/${room._id}/${fromDate}/${toDate}`}>
              <Button variant='warning' className='mx-2' >Proceed for Booking</Button>
            </Link>
          )}
          <Button variant='primary' className='mx-2' onClick={handleViewShow}>View Details</Button>
        </div>
      </Col>
      <ViewDetails Close={handleViewClose} show={viewshow} roomname={room.name} imageurls={room.imageurls} description={room.description} />
    </Row>
  )
}
