import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './feedback.css'
import { useAuth } from '../Authentication/Authe';
import Layout from './Layout';

export default function SiteFeedBack() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [messages, setMessage] = useState('')
  const navigate = useNavigate()
  const [auth] = useAuth()


  // getEmail 
  useEffect(() => {
    const { email, firstname, lastname } = auth?.user
    setEmail(email)
    setUsername(`${firstname} ${lastname}`)
  }, [auth?.user])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/submitfeedback', {
        username,
        email,
        messages
      })
      console.log(res)
      if (res && res.data.success) {
        alert(`${res.data && res.data.message} `)
        navigate("/")
      }
      else {
        alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
      alert(`Something went Wrong or You might already provided the feedback.`)
      alert(`Please checkout your dashboard to provide further feedback`)
    }
  }

  return (
    <>
      <Layout title='YourFeedBack - WanderHub' />
      <Row className='mr-auto text-white'>
        <Col className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
          <Form onSubmit={handleSubmit}>
            <div className="feedback-container py-4 p-md-5 gradient-custom-2">
              <h3 class="mb-4 text-center">Thank You for residing in our Hotel Brindavan.</h3>
              <p class="small mb-0"> We value your feedback and would appreciate if you could take a few moments to share our thoughts
                with us through your FeedBackForm given below. Please provide your insights and suggestions by completing the following form.
                Thankyou in advance for your valuable Form.Controls!
              </p>
              <div className="mb-3 my-3">
                <label htmlFor="" className='form-label'>Name:</label>
                <Form.Control type="text" className='form-control' onChange={(event) => setUsername(event.target.value)}
                  placeholder='Enter your Name' value={username} id='username' disabled />
              </div>
              <div className="mb-3 my-3">
                <label htmlFor="" className='form-label'>Email Address:</label>
                <Form.Control type="email" className='form-control' onChange={(event) => setEmail(event.target.value)}
                  placeholder='Enter the email id' value={email} id='email' disabled />
              </div>
              <div className="mb-3">
                <textarea onChange={(event) => setMessage(event.target.value)} className='form-control'
                  placeholder="Your Message" id="message" value={messages} cols="20" rows="8" required ></textarea>
              </div>
              <div className='d-flex justify-content-center align-items-center'>
                <Button type='submit' className='w-50' variant='primary'>Submit</Button>
              </div>
            </div>
          </Form>
        </Col>
      </Row>
    </>
  )
}
