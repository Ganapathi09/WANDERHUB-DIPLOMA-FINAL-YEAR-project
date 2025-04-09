import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { useAuth } from '../../Authe'
import Profile from '../Profile'
import GameDude from '../../../Introduction/gamed/GameDude'
import GetMyBookings from './GetMyBookings'
import Layout from '../../../Components/Layout'

import { Tabs } from 'antd'

const { TabPane } = Tabs

export default function UserDashBoard() {
  const [auth] = useAuth()
  return (
    <div>
      <Layout title='MyDashBoard - WanderHub' />
      <Container fluid className='mx-auto'>
        <h1 className='text-center text-navy'>My Dashboard</h1>
        <Tabs defaultActiveKey='1'>
          <TabPane tab="Profile Update" key="1">
            <Profile /> <br />
            <Table striped bordered hover responsive="sm">
              <tbody>
                <tr>
                  <th>Your FirstName:</th>
                  <td>{auth?.user?.firstname}</td>
                </tr>
                <tr>
                  <th>Your LastName:</th>
                  <td>{auth?.user?.lastname}</td>
                </tr>
                <tr>
                  <th>Your Email:</th>
                  <td>{auth?.user?.email}</td>
                </tr>
                <tr>
                  <th>Your Contact:</th>
                  <td>{auth?.user?.phno}</td>
                </tr>
              </tbody>
            </Table>
          </TabPane>
          <TabPane tab="Enjoy" key="2">
            <GameDude />
          </TabPane>
          <TabPane tab="My Bookings" key="3">
            <h1 className='text-center'>My Bookings</h1>
            <GetMyBookings />
          </TabPane>
        </Tabs>
      </Container>
    </div>
  )
}
