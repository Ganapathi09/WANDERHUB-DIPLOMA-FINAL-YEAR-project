import React, { useEffect, useState } from 'react'
import { useAuth } from './Authe'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import Loading from './Loading'


export default function PrivateRoute() {

    const [ok, setOk] = useState(false)
    const [auth] = useAuth()

    useEffect(() => {
        const authCheck = async () => {
            const res = await axios.get('/api/v1/auth/user-auth')
            if (res.data.ok) {
                setOk(true)
            } else {
                setOk(false)
            }
        }
        if (auth?.token) authCheck()
    }, [auth?.token])
    return ok ? <Outlet /> : <Loading />
}
