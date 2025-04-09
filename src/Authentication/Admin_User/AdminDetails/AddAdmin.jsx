import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { BiHide, BiShow } from 'react-icons/bi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../Admin_User/adus.css'

export default function AddAdmin() {
  const [showPopup, setShowPopup] = useState(false);

  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [answer, setAnswer] = useState('')
  const [phno, setPhone] = useState()
  const [role, setRole] = useState()
  const [showPassword, setshowPassword] = useState(false)
  const navigate = useNavigate()
  const togglePassword = () => {
    setshowPassword(!showPassword)
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post('/api/v1/auth/add-admin', {
        firstname,
        lastname,
        email,
        password,
        phno,
        answer,
        role,
      })
      console.log(res)
      if (res && res.data.success) {
        alert(`${res.data && res.data.message} `)
        navigate("/DashBoard/admin")
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
      <Button variant='outline-primary' onClick={() => setShowPopup(true)}>Add Admin</Button>
      {
        showPopup ? (
          <div className='bg-popup'>
            <div className="pop-menu">
              <Form onSubmit={handleSubmit}>
                <div className="text-center flex-row">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                    style={{ width: '185px', float: 'left' }} alt="logo" />
                  <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reg.jpg"
                    style={{ width: '185px', float: 'right' }} alt="logo" /> <br /><br />
                  <h4>Add Admin Page</h4>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={firstname}
                    onChange={(event) => setFirstName(event.target.value)}
                    className="form-control"
                    id="firstname"
                    placeholder="Enter Admin First Name"
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
                    placeholder="Enter Admin Last Name"
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
                    placeholder="Enter Admin Email "
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
                    placeholder="Enter Admin Password"
                    required
                    maxLength={8}
                  />
                </div>
                <div className="mb-3 show">
                  <Button variant='outline-warning text-navy' onClick={togglePassword} >{showPassword ? (<><BiHide /> Hide Password</>) : (<><BiShow /> Show Password</>)}</Button>
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    className="form-control"
                    id="answer"
                    placeholder="Enter name of Admin favourite game"
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
                    placeholder="Enter Admin Phone number"
                    maxLength={10}
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="tel"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                    className="form-control"
                    id="role"
                    placeholder="Enter Admin Role as 1 or else cancel your process"
                    required
                  />
                </div>
                <div className='d-flex justify-content-center align-items-center'>
                  <Button type='submit' variant='outline-primary'>REGISTER</Button>
                  <Button type='submit' className='text-white' onClick={() => setShowPopup(false)} variant='outline-danger'>CLOSE</Button>
                </div>
              </Form>
            </div>
          </div>
        ) : null
      }
    </>
  )
}
