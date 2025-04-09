import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import { AiTwotoneDelete } from 'react-icons/ai'

export default function RoomList() {
  const [rooms, setrooms] = useState([])

  useEffect(() => {
    axios.get('/api/v1/auth/getallrooms')
      .then(response => { setrooms(response.data) }).catch(error => { console.log(error) })
  }, [rooms])

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/auth/deleteroom/${id}`)
      if (response.data.message === 'RoomInfo Deleted successfully') {
        setrooms(rooms.filter(item => item._id !== id))
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Something Went Wrong')
    }
  }
  return (
    <div className='mx-auto'>
      <h1 className="text-center text-navy">Hotel Brindavan - Total Room: {rooms.length}</h1>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>ID</th>
            <th>RoomName</th>
            <th>MaxCount</th>
            <th>RentPerDay</th>
            <th>Type</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            rooms.map(room => {
              return (
                <tr key={room._id}>
                  <td>{room._id}</td>
                  <td>{room.name}</td>
                  <td>{room.maxcount}</td>
                  <td>{room.rentperday}</td>
                  <td>{room.type}</td>
                  <td>{room.description}</td>
                  <td>
                    <Button onClick={() => { handleDelete(room._id) }} variant='outline-danger'><AiTwotoneDelete />Delete</Button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}


