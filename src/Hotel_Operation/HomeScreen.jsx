import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Col, Row } from 'react-bootstrap'
import Room from './Room'
import 'antd/dist/reset.css'
import { DatePicker } from 'antd'
import './hotel.css'
import moment from 'moment'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import Layout from '../Components/Layout'

export default function HomeScreen() {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState()
  const [error, setError] = useState()

  const [fromDate, setFromDate] = useState()
  const [toDate, setToDate] = useState()
  // room filtering states
  const [duplicateRooms, setDuplicateRooms] = useState([])

  const { RangePicker } = DatePicker

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = (await axios.get('/api/v1/auth/getallrooms')).data
        setRooms(data)
        setDuplicateRooms(data)
        setLoading(false)
      } catch (error) {
        setError(true)
        console.log(error)
        setLoading(false)
      }
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const filterByDate = (dates) => {
    console.log(dates)
    console.log(dates[0].format('DD-MM-YYYY'))
    console.log(dates[1].format('DD-MM-YYYY'))

    setFromDate(dates[0].format('DD-MM-YYYY'))
    setToDate(dates[1].format('DD-MM-YYYY'))

    // tofilter room
    var temprooms = []
    for (const room of duplicateRooms) {
      var availability = false
      if (room.currentbookings.length > 0) {
        for (const booking of room.currentbookings) {
          if (!moment(moment(dates[0]).format('DD-MM-YYYY')).isBetween(booking.fromDate, booking.toDate)
            && !moment(moment(dates[1]).format('DD-MM-YYYY')).isBetween(booking.fromDate, booking.toDate)
          ) {
            if (
              dates[0].format('DD-MM-YYYY') !== booking.fromDate &&
              dates[0].format('DD-MM-YYYY') !== booking.toDate &&
              dates[1].format('DD-MM-YYYY') !== booking.fromDate &&
              dates[1].format('DD-MM-YYYY') !== booking.toDate
            ) {
              availability = true;
            }
          }
        }
      }
      else {
        availability = true
      }
      if (availability === true) {
        temprooms.push(room)
      }
    }
    setRooms(temprooms)
  }

  return (
    <>
      <Layout title='Find Your BestRoom | Hotel Brindavan- WanderHub' />
      <header className="introduction">
        <Col id="thing2"><h1>Welcome to Our Hotel Brindavan</h1><br />
          <h5 className="hotel-intro"><u>HOTEL BRINDAVAN : LODGING AND RESTAURANT</u> is a popular hotel located in Santhekatte, a bustling area in the city of Udupi in the Indian state of Karnataka. The hotel is known for its comfortable accommodations, excellent hospitality, and convenient location, making it a popular choice among travelers visiting Udupi for business or leisure.
            The hotel offers a range of room options, including standard rooms, deluxe rooms, and suites, all of which are equipped with modern amenities such as air conditioning, flat-screen TVs, and Wi-Fi. In addition, the hotel has a restaurant that serves delicious Indian, Chinese, and continental cuisine.
            Hotel Brindavan is located close to many popular attractions in Udupi, including the famous Sri Krishna Temple, the beautiful Malpe Beach, and the St. Mary's Island. The hotel is also located near the city's commercial and business districts, making it an ideal choice for business travelers.
            Overall, Hotel Brindavan offers a comfortable and convenient stay experience for travelers visiting Santhekatte and the surrounding areas of Udupi.
          </h5><br />
          <BsFillTelephoneFill /> Phone Number: +917947139910 <br />
          <MdLocationOn />Location : 9PJQ+R9M, 3rd cross Gopalpura, Santhekatte, Udupi - Perdoor - Agumbe Rd Karnataka 576105</Col>
      </header><hr />
      <Row className='container mx-auto justify-content-center'>
        <Col className='md-5 bg-warning'>
          <RangePicker format='DD-MM-YYYY' onChange={filterByDate} />
        </Col>
      </Row>
      <Row className="container mx-auto justify-content-center mt-3">
        {
          loading ? (<h1>Loading...</h1>) : (
            rooms.map(room => {
              return (
                <Row className='container'>
                  <Room room={room} fromDate={fromDate} toDate={toDate} />
                </Row>
              )
            })
          )
        }
        <h2 className="mt-5 text-center">Number of rooms available in our hotel: {rooms.length}</h2>
      </Row>
    </>
  )
}