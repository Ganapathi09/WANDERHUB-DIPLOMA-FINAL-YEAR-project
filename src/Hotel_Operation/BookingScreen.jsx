import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import './hotel.css'
import { FaRupeeSign } from 'react-icons/fa'
import moment from 'moment'
import { useAuth } from '../Authentication/Authe'
import Layout from '../Components/Layout'

export default function BookingScreen() {
  const [auth] = useAuth()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [room, setRoom] = useState()
  const { roomid, fromDate, toDate } = useParams()

  const fromdate = moment(fromDate, 'DD-MM-YYYY')
  const todate = moment(toDate, 'DD-MM-YYYY')
  const totalDays = moment.duration(todate.diff(fromdate)).asDays() + 1

  const [totalAmount, setTotalamount] = useState()

  useEffect(() => {
    async function fetchDataById() {
      try {
        setLoading(true)
        const data = (await axios.post('/api/v1/auth/getRoomById', { roomid: roomid })).data
        setRoom(data)
        // gst in %
        var cgst = (data.rentperday * totalDays * 9) / 100
        var sgst = (data.rentperday * totalDays * 9) / 100
        setTotalamount((data.rentperday * totalDays) + cgst + sgst)
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
        console.log(error)
      }
    }
    fetchDataById()
  }, [roomid, totalDays])

  const userid = auth?.user?._id
  const usermail = auth?.user?.email

  const handlePayNowClick = async () => {
    const bookingDetails = {
      room: {
        _id: room._id,
        name: room.name
      },
      userid,
      usermail,
      fromDate,
      toDate,
      totalAmount,
      totalDays,
    }

    try {
      const data = (await axios.post('/api/v1/auth/createPaymentIntent', { bookingDetails })).data;
      if (data.success) {
          const stripe = window.Stripe('pk_test_51NM5FaSFrQhhCX5yMtHjsVcAiwQab7OifUavfRdya7Df5s8M9rlZO2O8kKjkSvtMfoyQW5h6dkZTJgUxcUVnMJHt00By2Wjxh9'); // Replace with your Stripe publishable key
          const { clientSecret } = data;
          const result = await stripe.redirectToCheckout({ sessionId: clientSecret });
          if (result.error) {
              alert(result.error.message);
          }
      } else {
          alert('Payment failed. Please try again.');
      }
  } catch (err) {
      alert('Error in processing payment');
  }
}

  return (
    <div className='m-5'>
      <Layout title='BookTheRoom - WanderHub' />
      {loading ? (<h1>Loading...</h1>) : room ? (
        <div>
          <Row className='justify-content-center mt-5 room-component'>
            <Col className='md-5' col={5}>
              <h4>{room.name}</h4>
              <img src={room.imageurls[0]} className='w-100 bigimg' alt="Welcome to our Hotel Brindavan" />
            </Col>
            <Col className='md-5' col={5}>
              <div className='text-right'>
                <h5>Booking Details</h5><hr />
                <strong>
                  <p>Name:{auth?.user?.firstname} {auth?.user?.lastname}</p>
                  <p>From Date:{fromDate}</p>
                  <p>To Date:{toDate}</p>
                  <p>MaxCount:{room.maxcount}</p>
                </strong>
              </div>
              <div className='text-right'>
                <h5>Amount</h5><hr />
                <strong>
                  <p>Total Days:{totalDays}</p>
                  <p>Rent Per Date: <FaRupeeSign /> {room.rentperday}</p>
                  <p>Sub Total: <FaRupeeSign /> {room.rentperday * totalDays}</p>
                  <p>CGST Amount is: <FaRupeeSign /> {(room.rentperday * totalDays * 9) / 100}</p>
                  <p>SGST Amount is: <FaRupeeSign /> {(room.rentperday * totalDays * 9) / 100}</p>
                  <p>Total Amount: <FaRupeeSign /> {totalAmount}</p>
                  <p>MaxCount:{room.maxcount}</p>
                </strong>
              </div>
              <div style={{ float: 'right' }}>
                <Button onClick={handlePayNowClick} variant='primary' type="submit">Pay Now</Button>
                <Button variant='warning' href='/Welcome_to_our_HotelBrindavan/Book_Your_Room'>Go Back</Button>
              </div>
            </Col>
          </Row>
        </div>
      ) : (<h1>Error</h1>)}
    </div>
  )
}
