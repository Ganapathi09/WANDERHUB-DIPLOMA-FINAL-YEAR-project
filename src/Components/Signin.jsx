import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap'
import './signin.css'
import { BiHide, BiShow } from 'react-icons/bi'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useAuth, getIsLoggedIn } from '../Authentication/Authe';
import Layout from './Layout';

export default function Signin() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [auth, setAuth] = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const [showPassword, setshowPassword] = useState(false)

  if (getIsLoggedIn()) {
    window.history.back();
    return null;
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post("/api/v1/auth/login", { email, password })
      if (res && res.data.success) {
        alert(res.data && res.data.message)
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        })
        localStorage.setItem('auth', JSON.stringify(res.data))
        navigate(location.state || "/")
      } else {
        alert(res.data.message)
      }
    } catch (error) {
      console.log(error)
      alert("Something went wrong")
    }
  }
  const togglePassword = () => {
    setshowPassword(!showPassword)
  }
  return (
    <>
      <Layout title='Login - WanderHub' />
      <div className='Login-Block'>
        <div className="welcome mx-auto">
          <h2 class="mt-1 mb-1">We are more than just a company</h2>
          <p class="small">
            Welcome to our login page, where your journey begins! Step into a world of seamless access.
            Unlock the door to a world of possibilities with just a few clicks. We are delighted to have you here
            , ready to embark on an exciting digital adventure. <strong>Kindly, Enter you credentials </strong>
            and let us take you on a secure and a convinient journey. Get ready to explore a world of convenience,
            customization. and innovation. <br /><br />
            <h4> Your login experience starts now! </h4>
          </p>
        </div>
        <div className="form-container mx-auto">
          <Form onSubmit={handleSubmit}>
            <div className="text-center flex-row">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                style={{ width: '185px', float: 'left' }} alt="logo" />
              <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reg.jpg"
                style={{ width: '185px', float: 'right' }} alt="logo" />
            </div>
            <h4 className="mt-1 mb-5 pb-1">We are The Brindavan Guest</h4>
            <div className="mb-3"> <br />
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="form-control"
                id="email"
                placeholder="Enter Your emailid"
                required
                autoFocus
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
            </div>
            <div className="mb-3">
              <div className="d-block">
                <div className="mb-3 show">
                  <Button variant='outline-warning text-navy' onClick={togglePassword} >{showPassword ? (<><BiHide /> Hide Password</>) : (<><BiShow /> Show Password</>)}</Button>
                </div>
                <div className="mb-3 fp">
                  <Button variant='outline-danger text-navy' href='/forgot-password'>Forgot Password</Button>
                </div >
              </div >
            </div><br /><br /><br />
            <div className="text-center">
              <div className='d-flex justify-content-center align-items-center'>
                <Button className='w-50' type='submit' variant='outline-primary text-navy' >Login</Button>
              </div>
              <h1>OR</h1><strong>
                Dont have an account? <Link to="/register" className='linkers'> Click here</Link></strong>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

