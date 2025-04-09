import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../Authe'
import { Button } from 'react-bootstrap'
import { Tag } from 'antd'

export default function GetMyBookings() {
  const [auth] = useAuth()
  const [mybookings, setMyBookings] = useState([])

  const displayBooking = async () => {
    try {
      const response = await (await axios.post('/api/v1/auth/getbookingsbyid', { userid: auth?.user?._id })).data
      setMyBookings(response)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    displayBooking()
    // eslint-disable-next-line
  }, [])

  // cancelbooking dude
  const handleCancelbooking = async (bookingid, roomid) => {
    try {
      const result = await (await axios.post('/api/v1/auth/cancelbooking', { bookingid, roomid })).data
      console.log(result)
      if (result) {
        alert('Your Booking cancelled successfully')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
      alert('Failed to Cancel Booking')
    }
  }

  return (
    <div>
      {
        mybookings?.map((mybooking) => {
          return <div className='mb-5' style={{ backgroundColor: 'aqua', border: '2px solid magenta', borderRadius: '5px', marginLeft: '5%', marginRight: '5%' }} key={mybooking._id}>
            <legend><b>Room Name:     </b>{mybooking.room}           </legend><br />
            <p><b>Booking Id:     </b>{mybooking._id}            </p><br />
            <p><b>Booking Id:     </b>{mybooking._transactionId} </p><br />
            <p><b>Check-IN:       </b>{mybooking.fromDate}       </p><br />
            <p><b>Check-OUT:      </b>{mybooking.toDate}         </p><br />
            <p><b>Amount:         </b>{mybooking.totalAmount}    </p><br />
            <p><b>Booking Status: </b>{mybooking.status === 'booked' ? (
              <Tag color='green'>CONFIRMED</Tag>) : (<Tag color='red'>CANCELLED</Tag>)}</p><br />
            <div>
              {
                mybooking.status === 'booked' ? (
                  <Button variant='danger' onClick={() => { handleCancelbooking(mybooking._id, mybooking.roomid) }}>Cancel Booking</Button>
                ) : (
                  <Button variant='primary' href='/Welcome_to_our_HotelBrindavan/Book_Your_Room'>Continue Booking rooms</Button>
                )
              }
            </div>
          </div>
        })
      }
    </div>
  )
}
