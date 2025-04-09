import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'

export default function GetAllBookings() {
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    axios.get('/api/v1/auth/getuserbookings')
      .then(response => { setBookings(response.data) }).catch(error => { console.log(error) })
  }, [bookings])

  // to delete
  const handleBookDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/auth/deleteuserbookings/${id}`)
      if (response.data.message === 'BookingInfo Deleted successfully') {
        setBookings(bookings.filter(item => item._id !== id))
        alert(response.data.message)
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
      alert('Something Went Wrong')
    }
  }

  // cancelbooking dude usesrbooking by admin
  const handleCancelbooking = async (bookingid, roomid) => {
    try {
      const result = await (await axios.post('/api/v1/auth/cancelbooking', { bookingid, roomid })).data
      console.log(result)
      if (result) {
        alert('Booking cancelled successfully')
        window.location.reload()
      }
    } catch (error) {
      console.log(error)
      alert('Failed to Cancel Booking')
    }
  }

  return (
    <Table striped bordered hover responsive="lg">
      <thead>
        <tr>
          <th>Booking ID</th>
          <th>User ID</th>
          <th>User Mail</th>
          <th>Room</th>
          <th>FromDate</th>
          <th>ToDate</th>
          <th>Status</th>
          <th>Action</th>
          <th>Clear Currentbookings</th>
        </tr>
      </thead>
      <tbody>
        {
          bookings.map(booking => {
            return (
              <tr key={booking._id}>
                <td>{booking._id}</td>
                <td>{booking.userid}</td>
                <td>{booking.usermail}</td>
                <td>{booking.room}</td>
                <td>{booking.fromDate}</td>
                <td>{booking.toDate}</td>
                <td>{booking.status}</td>
                <td>
                  <Button variant='danger' onClick={() => { handleBookDelete(booking._id) }} >Delete Booking Data</Button>
                </td>
                <td>
                  <Button variant='danger' onClick={() => { handleCancelbooking(booking._id, booking.roomid) }}>Cancel user Booking</Button>
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}
