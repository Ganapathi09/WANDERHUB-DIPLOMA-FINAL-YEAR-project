import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './fogotpass.css'
import axios from 'axios'
import { BiHide, BiShow } from 'react-icons/bi'
import { Form, Button } from 'react-bootstrap'
import Layout from './Layout'


export default function ForgotPassword() {
    const [email, setEmail] = useState('')
    const [answer, setAnswer] = useState('')
    const [newPassword, setnewPassword] = useState('')
    const navigate = useNavigate()
    const [showPassword, setshowPassword] = useState(false)
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const res = await axios.post("/api/v1/auth//forgot-password", { email, newPassword, answer })
            if (res && res.data.success) {
                alert(res.data && res.data.message)
                navigate("/login")
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
            <Layout title='ForgotPassword - WanderHub' />
            <div className="form-container">
                <Form onSubmit={handleSubmit}>
                    <div className="text-center flex-row">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                            style={{ width: '185px', float: 'left' }} alt="logo" />
                        <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reg.jpg"
                            style={{ width: '185px', float: 'right' }} alt="logo" />
                        <h4 className="mt-1 mb-5 pb-1">We are The Brindavan Guest</h4>
                        <h3>RESET YOUR Password</h3>
                    </div>
                    <div className="mb-3">
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
                            type="text"
                            value={answer}
                            onChange={(event) => setAnswer(event.target.value)}
                            className="form-control"
                            id="firstname"
                            placeholder="Enter name of your favourite game"
                            required="Remember during registration"
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type={showPassword ? 'text' : 'password'}
                            value={newPassword}
                            onChange={(event) => setnewPassword(event.target.value)}
                            className="form-control"
                            id="password"
                            placeholder="Enter Your new Password"
                            maxLength={8}
                            required
                        />
                        <div className="mb-3">
                            <Button variant='outline-warning text-navy' onClick={togglePassword} >{showPassword ? (<><BiHide /> Hide Password</>) : (<><BiShow /> Show Password</>)}</Button>
                        </div>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <Button type='submit' variant='outline-primary'>RESET AND SUBMIT</Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
