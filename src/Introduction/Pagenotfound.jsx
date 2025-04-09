import React from 'react'
import './intro.css'
import { Button } from 'react-bootstrap'
import GameDude from './gamed/GameDude'
import Layout from '../Components/Layout'

export default function Pagenotfound() {
    return (
        <>
            <Layout title='PageNotFound - WanderHub' />
            <div className='pagenotfound'>
                <h2>404 ERROR</h2>
                <h1>OOPS! Page Not Found</h1>
                <Button variant='outline-danger text-black' href='/'>GO HOME</Button><br /><br />
                <GameDude />
            </div></>
    )
}
