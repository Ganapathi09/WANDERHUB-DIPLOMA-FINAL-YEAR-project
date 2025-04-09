import React, { useState, useEffect } from 'react'
import './sweet.css'
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { FaRupeeSign } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
import { BsShop, BsInstagram, BsFacebook, BsFillTelephoneFill } from 'react-icons/bs'
import Search from '../../Components/Search'
import Layout from '../../Components/Layout';

export default function SweetShopsList() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  })
  return (
    <>
      <Layout title='SweetShops in Udupi - WanderHub' />
      <div className='shop-section-block'>
        <header className='c2 mx-auto'>
          <Search />
        </header>
        <h2>LIST OF SWEET SHOPS IN COASTAL AREAS</h2>
        <div className="shop-container mx-auto">
          <div className="shop-box">
            <Card>
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/Mand.jpg' />
              <Card.Body><span>
                <Card.Text><b> <BsShop />Krishnamurthy Saralaya's Mandige</b></Card.Text>
                <Card.Text> <b>ADDRESS:</b> H.no 1210, Konwal Galli, Belagavi, Karnataka 590001 <br /> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /> <b>PHONE NO:</b>9448691137 <br />
                </Card.Text></span>
                <Card.Footer>
                  <Button variant="outline-warning" href="https://goo.gl/maps/4WDMZBbCrp3UZVbcA"><MdLocationOn /> Address</Button>&nbsp;&nbsp;
                  <Button variant="outline-warning" href="/Welcometo_Saralayas_Mandige">View Details</Button><br /><br />
                  <Card.Text className="input-group-justified">Follow us at:
                    <Button variant='outline-primary' href="https://www.facebook.com/unboxkarnataka/">
                      <BsFacebook />
                    </Button>
                    <Button href="https://www.instagram.com/unbox_karna" style={{ color: 'darkmagenta', backgroundColor: 'rgb(255, 88, 202)' }}>
                      <BsInstagram />
                    </Button>
                  </Card.Text>
                </Card.Footer>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card>
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/vipra.jpg' />
              <Card.Body>
                <Card.Text><b> <BsShop />VIPRA SWEET HOME</b></Card.Text>
                <Card.Text><b>ADDRESS</b>  Krishna Mutt Parking Place, Yard, Udupi, Karnataka 576101<br></br></Card.Text>
                <Card.Text><BsFillTelephoneFill /> <b>PHONE NO </b> 094485 47510 <br /></Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/jKtjxaQ4eNQDra7dA" ><MdLocationOn /> Address</Button>&nbsp;&nbsp;
                <Button variant="outline-warning" href="/Welcometo_VIPRA_SWEET_HOME" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card >
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/vk.jpg' />
              <Card.Body>
                <Card.Text><b> <BsShop />Sri Venkateshwara Sweets</b></Card.Text>
                <Card.Text><b>ADDRESS</b> 8PRX+HP6, SH 37, Thenkpete, Maruthi Veethika, Udupi, Karnataka 576101<br></br></Card.Text>
                <Card.Text><BsFillTelephoneFill /><b>PHONE NO </b> 9448691137 <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/2gBCJ8XvwFQnD9AG7" ><MdLocationOn /> Address</Button>&nbsp;&nbsp;
                <Button variant="outline-warning" href="/Welcometo_Sri_Venkateshwara_Sweets" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card >
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/om_utsav.jpg' />
              <Card.Body>
                <Card.Text> <b><BsShop />  OM UTSAV SWEETS</b></Card.Text>
                <Card.Text> <b>ADDRESS</b> 8QW6+JCF, Udupi-Manipal Hwy, Kunjibettu <br></br>Udupi, Karnataka 576102 <br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /><b>PHONE NO </b> 7947331918 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/zMKoREMxaCULxhfZA" ><MdLocationOn /> Address</Button>
                <Button variant="outline-warning" href="/Welcometo_OM_UTSAV_SWEETS" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card>
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/mishra.jpg' />
              <Card.Body>
                <Card.Text> <b><BsShop /> BIG MISHRA PEDHA</b></Card.Text>
                <Card.Text> <b>ADDRESS</b> London Plaza, Km Marg, Udupi - 576101 (Near London Opticals&London Times)<br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /> <b>PHONE NO </b> 7947225669 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/iLyN95iZyzyhmcpp6"><MdLocationOn /> Address </Button>
                <Button variant="outline-warning" href="/Welcometo_BIG_MISHRA_PEDHA" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card >
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/udupi_sweets.jpg' />
              <Card.Body>
                <Card.Text> <b><BsShop /> UDUPI SWEETS </b></Card.Text>
                <Card.Text> <b>ADDRESS</b> No.9-4-44e, Sri Krishna Sowrabha, Km Marg, Udupi - 576101 (Opposite Mother Of Sorrowas Church)<br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /><b>PHONE NO </b> 7947422893 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/vk5tqjJnh6fi51MW8" ><MdLocationOn /> Address </Button>
                <Button variant="outline-warning" href="/Welcometo_UDUPI_SWEETS" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card >
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/sai_parivar.jpg' />
              <Card.Body>
                <Card.Text> <b><BsShop />SRI SAI PARIVAR</b></Card.Text>
                <Card.Text> <b>ADDRESS</b> 8PVW+2RJ, Thenkpete, Maruthi Veethika, <br></br> Udupi, Karnataka 576101 <br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /><b>PHONE NO </b> 9590142752 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/vk5tqjJnh6fi51MW8" ><MdLocationOn /> Address</Button>
                <Button variant="outline-warning" href="/Welcometo_SRI_SAI_PARIVAR" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card>
              <Card.Img className="d-block mx-auto w-50" variant="top" src='https://raw.githubusercontent.com/<Enter the github username>/ideal-pix/main/before_loggedin/sweets/sweetshops/madhuram.jpg' />
              <Card.Body>
                <Card.Text> <b> <BsShop /> MADHURAM MISTHAN BHANDHAR</b> </Card.Text>
                <Card.Text> <b>ADDRESS</b> Ground floor , Hotel White Lotus, Maruthi Veethika Rd, Udupi, Karnataka 576101<br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /> <b>PHONE NO </b> 090353 46154 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/YDZNaX6oDth4VnZQ8" ><MdLocationOn /> Address</Button>
                <Button variant="outline-warning" href="/Welcometo_MADHURAM_MISTHAN_BHANDHAR" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <div className="shop-box">
            <Card >
              <Card.Img className="d-block mx-auto w-50" variant="top" src='http://parivarudupi.com/images/300.jpg' />
              <Card.Body>
                <Card.Text> <b><BsShop />  PARIVAR SWEETS AND BAKERY</b> </Card.Text>
                <Card.Text> <b>ADDRESS</b> Sanskrit College Road ,Udupi, Karnataka ( South ) - 576101<br></br> </Card.Text>
                <Card.Text> <BsFillTelephoneFill /><b>PHONE NO </b> 0820-2525101 </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="outline-warning" href="https://goo.gl/maps/uMBPCrTaLBpyVqka6" ><MdLocationOn /> Address </Button>
                <Button variant="outline-warning" href="/Welcometo_PARIVAR_SWEETS" >View Details</Button><br /><br />
                <small className="text-muted mx-auto">Last updated {count} sec ago</small>
              </Card.Footer>
            </Card>
          </div>
          <marquee width="100%" height="1rem" direction="left" className="text-navy">
            Sweet Images shown in these shops may vary depending on shape and size, Also <FaRupeeSign /> Price may also vary depending
            special occasions, festivals and other reasons. So Please contact for any queries for Phone number given. IF its telephone number then please remove the +91
          </marquee>
        </div>
      </div></>
  )
}
