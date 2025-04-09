import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Loading() {
    const [count, setCount] = useState(2)
    const navigate = useNavigate()
    const location = useLocation()
    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate('/', {
            state: location.pathname
        })
        return () => clearInterval(interval)
    }, [count, navigate, location])
    return (
        <>
            <h1 className='mx-auto text-blue'>Redirecting to you in {count} seconds</h1>
            <Spinner animation='border' variant='danger' className='d-flex flex-column justify-content-center align-items-center mx-auto' />
        </>
    )
}
