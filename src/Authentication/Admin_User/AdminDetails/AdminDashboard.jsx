import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useAuth } from '../../Authe'
import Profile from '../Profile'
import { Tabs } from 'antd'
import RoomList from './RoomList'
import AddRoom from './AddRoom'
import GetAllBookings from './GetAllBookings'
import GetAllUsers from './GetAllUsers'
import FeedbackDetails from './FeedbackDetails'
import Layout from '../../../Components/Layout'

const { TabPane } = Tabs

export default function AdminDashboard() {
  const [auth] = useAuth()
  return (
    <>
      <Layout title='Admin DashBoard - WanderHub' />
      <Container fluid className='mx-auto'>
        <h1 className='text-center text-navy'>Admin Dashboard </h1>
        <Tabs defaultActiveKey='1'>
          <TabPane tab='Profile Update' key='1'>
            <Profile />
            <Table striped bordered hover responsive="sm">
              <tbody>
                <tr>
                  <th>Admin FirstName:</th>
                  <td>{auth?.user?.firstname}</td>
                </tr>
                <tr>
                  <th>Admin LastName:</th>
                  <td>{auth?.user?.lastname}</td>
                </tr>
                <tr>
                  <th>Admin Email:</th>
                  <td>{auth?.user?.email}</td>
                </tr>
                <tr>
                  <th>Admin Contact:</th>
                  <td>{auth?.user?.phno}</td>
                </tr>
              </tbody>
            </Table>
          </TabPane>
          <TabPane tab='List Room' key='2'>
            <RoomList />
          </TabPane>
          <TabPane tab='Add Room' key='3'>
            <AddRoom />
          </TabPane>
          <TabPane tab='Booked Rooms By User' key='4'>
            <h5 className='text-center'>Cancel Current Bookings first, then delete booking model</h5>
            <GetAllBookings />
          </TabPane>
          <TabPane tab='List of User' key='5'>
            <GetAllUsers />
          </TabPane>
          <TabPane tab='FeedBack' key='6'>
            <FeedbackDetails />
          </TabPane>
        </Tabs>
      </Container>
    </>
  )
}
