import React, { useEffect, useState } from 'react'
import '../../Components/logreg.css'
import { useAuth } from '../Authe'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

export default function Profile() {
  const [auth, setAuth] = useAuth()
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phno, setPhone] = useState()

  // get user data
  useEffect(() => {
    const { firstname, lastname, email, password, phno, } = auth?.user
    setFirstName(firstname)
    setLastName(lastname)
    setEmail(email)
    setPhone(phno)
    setPassword(password)
  }, [auth?.user])

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await axios.put('/api/v1/auth/profile', {
        firstname,
        lastname,
        email,
        password,
        phno,
      })
      if (data?.error) {
        alert(data?.error)
      }
      else {
        setAuth({ ...auth, user: data?.updatedUser })
        let ls = localStorage.getItem("auth")
        ls = JSON.parse(ls)
        ls.user = data.updatedUser
        localStorage.setItem('auth', JSON.stringify(ls))
        alert("Profile Updated Successfully")
      }
    } catch (error) {
      console.log(error)
      alert(`Something went Wrong`)
    }
  }

  return (
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
            disabled
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="form-control"
            id="password"
            placeholder="Enter Your Password"
            maxLength={8}
          /></div>
        <div className="mb-3">
          <input
            type="tel"
            value={phno}
            onChange={(event) => setPhone(event.target.value)}
            className="form-control"
            id="phno"
            placeholder="Enter Your Phone number"
            maxLength={10}
          />
        </div>
        <Button type='submit' variant='outline-primary'>UPDATE</Button>
      </Form>
    </div>
  )
}
