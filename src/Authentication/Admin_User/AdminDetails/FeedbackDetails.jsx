import React, { useState, useEffect } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import axios from 'axios'
import { AiTwotoneDelete } from 'react-icons/ai'

export default function FeedbackDetails() {
  const [feeds, setFeeds] = useState([])

  useEffect(() => {
    axios.get('/api/v1/auth/getallfeeds')
      .then(response => { setFeeds(response.data) }).catch(error => { console.log(error) })
  }, [feeds])

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`/api/v1/auth/deletefeed/${id}`)
      if (response.data.message === 'FeedBack Deleted successfully') {
        setFeeds(feeds.filter(item => item._id !== id))
        alert(response.data.message)
      }
    } catch (error) {
      console.log(error)
      alert('Something Went Wrong')
    }
  }
  return (
    <Container fluid className='mx-auto'>
      <h1 className="text-center text-navy">Feedback Details</h1>
      <Table striped bordered hover responsive="lg">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message/Suggestions</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            feeds.map(feed => {
              return (
                <tr key={feed._id}>
                  <td>{feed.username}</td>
                  <td>{feed.email}</td>
                  <td>{feed.messages}</td>
                  <td><Button onClick={() => { handleDelete(feed._id) }} variant='outline-danger'><AiTwotoneDelete />Delete</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </Container>
  )
}
