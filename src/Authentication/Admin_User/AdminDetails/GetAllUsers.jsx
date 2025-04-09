import React, { useEffect, useState } from 'react'
import { Table, Button } from 'react-bootstrap'
import axios from 'axios'
import { AiTwotoneDelete } from 'react-icons/ai'
import AddAdmin from './AddAdmin'

export default function GetAllUsers() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios.get('/api/v1/auth/getallusers')
      .then(response => { setUsers(response.data) }).catch(error => { console.log(error) })
  }, [users])

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/auth/deleteuser/${id}`)
      if (response.data.message === 'UserInfo Deleted successfully') {
        setUsers(users.filter(item => item._id !== id))
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Something Went Wrong')
    }
  }
  return (
    <Table striped bordered hover responsive="lg">
      <thead>
        <tr>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Role</th>
          <th>Type</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.phno}</td>
                <td>{user.role}</td>
                <td>{user.role === 1 ? "Admin" : "User"}</td>
                <td>
                  {user.role === 0 ? (
                    <Button onClick={() => { handleDelete(user._id) }} variant='outline-danger'><AiTwotoneDelete />Delete</Button>
                  ) : (<>
                    {user.role === 1 && user.email === "nk@gmail.com" ? (
                      <>
                        <AddAdmin />
                      </>
                    ) : (
                      <>
                        <Button onClick={() => { handleDelete(user._id) }} variant='outline-danger'><AiTwotoneDelete />Delete</Button>
                      </>
                    )}
                  </>)}
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </Table>
  )
}


