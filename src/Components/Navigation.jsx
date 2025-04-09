import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { AiOutlineForm, AiTwotoneHome } from 'react-icons/ai'
import { BsFillPersonVcardFill, BsFillTreeFill } from 'react-icons/bs'
import { FaHotel, FaPrayingHands, FaWalking } from 'react-icons/fa'
import { TbBeach } from 'react-icons/tb'
import { GoSignIn, GoSignOut } from 'react-icons/go'
import '../index.css'
import { useAuth } from '../Authentication/Authe'
import { BiPurchaseTagAlt } from 'react-icons/bi';

export default function Navigation() {
  const [auth, setAuth] = useAuth()

  const handleLogout = () => {
    setAuth({
      ...auth, user: null, token: ""
    })
    localStorage.removeItem("auth")
    alert('Logout Successfully')
  }

  return (
    <>
      {!auth.user ? (
        <>
          <Navbar href='/' className='navbar' expand="lg">
            <Container fluid>
              <span className="logo"> <Nav.Link href="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/weblogo/udupi.png"> <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/weblogo/favicon-32x32.png" alt="Our Web Logo" /></Nav.Link></span>
              <Navbar.Brand className='text-white' href='/'>Welcome to Hotel Brindavan</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav navbarScroll>
                  <Nav.Link href="/" className='nav-links'><AiTwotoneHome /> Home</Nav.Link>
                  <Nav.Link href="/login" className='nav-links'><GoSignIn />Signin</Nav.Link>
                  <Nav.Link href="/register" className='nav-links'><GoSignIn />Register</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container></Navbar>
        </>
      ) : (
        <>
          <Navbar href='/' className='navbar' expand="lg">
            <Container fluid>
              <span className="logo"> <Nav.Link href="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/weblogo/udupi.png"> <img src="https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/weblogo/favicon-32x32.png" alt="Our Web Logo" /></Nav.Link></span>
              <Navbar.Brand className='text-white' href='/'> <FaPrayingHands /> Welcome {`${auth?.user?.firstname} ${auth?.user?.lastname}`}  <br /> to our Hotel Brindavan</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav navbarScroll>
                  <Nav.Link href="/" className='nav-links'><AiTwotoneHome /> Home</Nav.Link>
                  <Nav.Link href="/About" className='nav-links'><BsFillPersonVcardFill />About</Nav.Link>
                  <NavDropdown style={{ backgroundColor: 'aqua' }} title='Our Hotel' id="navbarScrollingDropdown" >
                    <NavDropdown.Item className='sub-nav-links' href='/Welcome_to_our_HotelBrindavan'><FaWalking />Get Started</NavDropdown.Item>
                    <NavDropdown.Item className='sub-nav-links' href='/Welcome_to_our_HotelBrindavan/Book_Your_Room'><FaHotel />RoomBooking</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown style={{ backgroundColor: 'aqua' }} title="SweetHub" id="navbarScrollingDropdown" >
                    <NavDropdown.Item className='sub-nav-links' href="/Sweethub"><FaWalking /> Get Started</NavDropdown.Item>
                    <NavDropdown.Item className='sub-nav-links' href="/Sweethub/BuySweets"><BiPurchaseTagAlt />SweetShops</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown style={{ backgroundColor: 'aqua' }} title={`Hello ${auth?.user?.firstname} ${auth?.user?.lastname}`} id="navbarScrollingDropdown" >
                    <NavDropdown.Item className='sub-nav-links' href={`/DashBoard/${auth?.user?.role === 1 ? 'admin' : 'user'}`}><BsFillPersonVcardFill /> DashBoard</NavDropdown.Item>
                    <NavDropdown.Item className='sub-nav-links' href='/FeedbackForm'><AiOutlineForm /> FeedBack</NavDropdown.Item>
                    <NavDropdown.Item className='sub-nav-links' href="/" onClick={handleLogout}><GoSignOut />Logout</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/Tourism" className='nav-links'><BsFillTreeFill />Tourism <TbBeach /></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </>
      )}
    </>
  );
}
