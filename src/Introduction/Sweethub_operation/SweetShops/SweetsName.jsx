import React, { useState, useEffect } from 'react'
import './sweetname.css'
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";
import { FaRupeeSign } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'

export default function SweetsName(props) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1)
    }, 1000);
  })

  const CallButton = () => {
    window.location.href = `tel:+91${props.phonenumber}`
  }

  return (
    <div className='sweet-section-block'>
      <h1 className="text-center text-navy">LIST OF SWEET Available in the {props.shopname}</h1> <br />
      <h4 className="text-center text-navy">Phone number {props.phonenumber}</h4>
      <div className="sweet-container">
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src1} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname1}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice1}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src2} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname2}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice2}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src3} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname3}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice3}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src4} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname4}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice4}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src5} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname5}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice5}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src6} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname6}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice6}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src7} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname7}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice7}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src8} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname8}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice8}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src9} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname9}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice9}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src10} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname10}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice10}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src11} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname11}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice11}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src12} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname12}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice12}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src13} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname13}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice13}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src14} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname14}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice14}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src15} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname15}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice15}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src16} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname16}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice16}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src17} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname17}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice17}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src18} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname18}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice18}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src19} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname19}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice19}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
        <div className="sweet-box" >
          <Card>
            <Card.Img className="d-block w-50 mx-auto my-2" variant="top" src={props.src20} />
            <Card.Body><span>
              <Card.Text><b>{props.sweetname20}</b></Card.Text>
              <Card.Text> <FaRupeeSign />{props.sweetprice20}</Card.Text>
              <Card.Text> <Button onClick={CallButton}><BsFillTelephoneFill />Call for deal</Button><br />
              </Card.Text></span>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated {count} sec ago</small>
            </Card.Footer>
          </Card>
        </div>
      </div>
    </div>
  )
}
