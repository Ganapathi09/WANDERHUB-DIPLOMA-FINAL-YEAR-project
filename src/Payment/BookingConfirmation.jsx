import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './style.css';

export default function About() {
  const urlParams = new URLSearchParams(window.location.search);
  const paymentStatus = urlParams.get('payment');
  const bookingDetails = urlParams.get('bookingDetails');
  const [bookingStatus, setBookingStatus] = useState('pending');

  const bookRoom = async () => {
    try {
      if (!bookingDetails) {
        throw new Error('Error while booking room');
      }
      const result = await axios.post('/api/v1/auth/bookroom', JSON.parse(bookingDetails))
      if (result.data.success === true) {
        // alert(result.data.message)
        setBookingStatus('done');
      } else {
        throw new Error('Error while booking room');
      }
    } catch (error) {
      console.log(error)
      alert(error);
    }
  }

  useEffect(() => {
    if (paymentStatus === 'success') {
      // update booking here
      bookRoom(bookingDetails);
    }
  }, [bookingDetails, paymentStatus]);

  if (paymentStatus === 'success') {
    return <div className="bookingConfirmation">
      {bookingStatus === 'pending' ? 'Finalizing booking ...' : 'Congratulations! Booking is confirmed.'}
    </div>;
  } else {
    return (
      <div className='bookingConfirmation'>
        Sorry, the booking failed. Please try again after some time.
      </div>
    )
  }
}