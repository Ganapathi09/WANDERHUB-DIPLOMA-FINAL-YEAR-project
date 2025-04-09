import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../../Admin_User/adus.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function AddRoom() {
  const [name, setName] = useState('')
  const [maxcount, setMaxCount] = useState()
  const [rentperday, setRentPerDay] = useState()
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl1, setImageUrl1] = useState('')
  const [imageUrl2, setImageUrl2] = useState('')
  const [imageUrl3, setImageUrl3] = useState('')

  const navigate = useNavigate()

  const handleAddRoom = async (event) => {
    event.preventDefault()
    try {
      const newRoom = {
        name,
        maxcount,
        rentperday,
        type,
        description,
        imageurls: [imageUrl1, imageUrl2, imageUrl3],
        currentbookings: [],
      }
      // console.log(newRoom)
      const result = await axios.post('/api/v1/auth/addroom', newRoom)
      if (result && result.data.success) {
        alert(`${result.data.message}`)
        navigate('/BrindavanHotel_Features')
      }
    } catch (error) {
      console.log(error)
      alert(`Something went Wrong Please checkout it.`)
    }
  }

  return (
    <div className='mx-auto'>
      <h1 className="text-center text-navy">Hotel Brindavan</h1>
      <Form onSubmit={handleAddRoom}>
        <div className="py-4 p-md-5 gradient-custom-2">
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='Enter RoomName'
              value={name} onChange={(event) => { setName(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <input type="number" className='form-control' placeholder='Enter MaxCount'
              value={maxcount} onChange={(event) => { setMaxCount(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <input type="tel" className='form-control' placeholder='Enter RentPerDay'
              value={rentperday} onChange={(event) => { setRentPerDay(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <input className='form-control' placeholder='Enter Room Type'
              value={type} onChange={(event) => { setType(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <textarea type="text" className='form-control' placeholder='Enter Room Description'
              value={description} onChange={(event) => { setDescription(event.target.value) }}
            ></textarea>
          </div>
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='Add ImageUrl1'
              value={imageUrl1} onChange={(event) => { setImageUrl1(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='Add ImageUrl2'
              value={imageUrl2} onChange={(event) => { setImageUrl2(event.target.value) }}
            />
          </div>
          <div className="mb-3">
            <input type="text" className='form-control' placeholder='Add ImageUrl3'
              value={imageUrl3} onChange={(event) => { setImageUrl3(event.target.value) }}
            />
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <Button type='submit' className='w-50' variant='primary'>Add Room</Button>
          </div>
        </div>
      </Form>
    </div>
  )
}
