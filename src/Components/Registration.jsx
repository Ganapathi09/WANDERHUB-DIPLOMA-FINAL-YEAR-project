import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import axios from 'axios';
import { BiHide, BiShow } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import './logreg.css'
import Layout from './Layout';

export default function Registration() {
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [answer, setAnswer] = useState('')
  const [phno, setPhone] = useState()
  const [showPassword, setshowPassword] = useState(false)
  const navigate = useNavigate()
  const togglePassword = () => {
    setshowPassword(!showPassword)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/register', {
        firstname,
        lastname,
        email,
        password,
        phno,
        answer,
      })
      console.log(res)
      if (res && res.data.success) {
        alert(`${res.data && res.data.message} `)
        navigate("/login")
      }
      else {
        alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
      alert(`Something went Wrong`)
    }
  }
  return (
    <>
      <Layout title='CreateAccount - WanderHub' />
      <div className="form-container ">
        <Form onSubmit={handleSubmit}>
          <div className="text-center flex-row">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
              style={{ width: '185px', float: 'left' }} alt="logo" />
            <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reg.jpg"
              style={{ width: '185px', float: 'right' }} alt="logo" /> <br /><br />
            <h4 className="mt-1 mb-5 pb-1">We are The Brindavan Guest</h4>
            <h3>Registration Page</h3>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={firstname}
              onChange={(event) => setFirstName(event.target.value)}
              className="form-control"
              id="firstname"
              placeholder="Enter Your First Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={lastname}
              onChange={(event) => setLastName(event.target.value)}
              className="form-control"
              id="lastname"
              placeholder="Enter Your Last Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="form-control"
              id="email"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="form-control"
              id="password"
              placeholder="Enter Your Password"
              required
              maxLength={8}
            />
            <div className="mb-3">
              <Button variant='outline-warning text-navy' onClick={togglePassword} >{showPassword ? (<><BiHide /> Hide Password</>) : (<><BiShow /> Show Password</>)}</Button>
            </div>
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              className="form-control"
              id="answer"
              placeholder="Enter name of your favourite game"
              required="Recommended to remember"
            />
          </div>
          <div className="mb-3">
            <input
              type="tel"
              value={phno}
              onChange={(event) => setPhone(event.target.value)}
              className="form-control"
              id="phno"
              placeholder="Enter Your Phone number"
              maxLength={10}
              required
            />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Button className='w-50' type='submit' variant='outline-primary'>REGISTER</Button>
          </div>
        </Form>
      </div>
    </>
  )
}
