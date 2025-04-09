import React from 'react'
import { Button } from 'react-bootstrap'
import '../index.css'
import { BiMailSend, BiPhoneCall } from 'react-icons/bi'
import { BsFacebook, BsInstagram } from 'react-icons/bs'
import { FaTelegram } from 'react-icons/fa'
export default function Footer() {
    return (
        <div>
            <footer className='footer-content'>
                <div className="footer-image">
                    <img className="d-flex flex-column w-100" src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/reg.jpg" alt="logo" />
                </div>
                <span className="contact">
                    <h4> &copy; 2023 owned by Hotel Brindavan, <strong>ALL RIGHTS RESERVED</strong> <br /><br /></h4>
                    <div className="mb-3">
                        <strong>You can Contact Us below</strong> <br /><br />
                        <BiMailSend />Email: hotel.brindavan@gmail.com <br />
                        <BiPhoneCall />Phone no: 9632399887<br /><br />
                    </div>
                    <div className="mb-3">
                        <strong>You can also follow us on our Social Media</strong>
                        <div className="input-group-justified">
                            <Button href="https://www.instagram.com" style={{ color: 'darkmagenta', backgroundColor: 'rgb(255, 88, 202)' }}>
                                <BsInstagram />
                            </Button>
                            <Button variant='outline-primary' href="https://www.telegram.com">
                                <FaTelegram />
                            </Button>
                            <Button variant='outline-primary' href="https://www.facebook.com">
                                <BsFacebook />
                            </Button>
                        </div><br /><br />
                    </div>
                </span>
            </footer>
        </div>
    )
}
