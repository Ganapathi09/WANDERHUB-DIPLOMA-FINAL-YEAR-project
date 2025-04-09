import React from 'react'
import './tourist.css'
import { MdLocationOn } from 'react-icons/md'

export default function TInfo(props) {
  return (
    <div className="tourist-box mx-auto" id={props.id}>
      <div className="img-map">
        <div className="picinfo">
          <div className="maps mx-auto">
            <iframe src={props.mapsrc} frameborder="1" width={300} height={300} style={{ border: '0' }} allowFullScreen="" loading='eager' referrerPolicy='no-referrer-when-downgrade'></iframe>
          </div>
        </div>
      </div>
      <div className="placeinfo">
        <b>{props.info}</b>
        <table>
          <tr>
            <td><b><MdLocationOn /> Location: </b></td>
            <td>{props.location}</td>
          </tr>
          <tr>
            <td><b>Speciality</b></td>
            <td>{props.speciality}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
