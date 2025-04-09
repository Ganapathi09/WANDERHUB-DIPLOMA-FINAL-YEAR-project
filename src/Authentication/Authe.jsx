import React, { useState, useContext, createContext } from 'react'
import axios from 'axios'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const authFromLocalStorage = localStorage.getItem('auth');
    let authData1;
    if (authFromLocalStorage) {
        const parseData = JSON.parse(authFromLocalStorage)
        authData1 = {
            ...authFromLocalStorage,
            user: parseData.user,
            token: parseData.token,
        }
    }

    const [auth, setAuth] = useState({
        user: authData1?.user, token: authData1?.token
    })


    // default axios
    axios.defaults.headers.common['Authorization'] = auth?.token

    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = () => useContext(AuthContext);

export const getIsLoggedIn = () => {
    const authData = localStorage.getItem('auth');
    return Boolean(authData);
}
export { useAuth, AuthProvider }
