import { useCookies } from 'react-cookie'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import Register from "../User/Views/Register"
import { Navigate, useNavigate } from "react-router-dom"
import { useEffect } from 'react'

function useCleanCookies() {
    const [, , removeCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN])

    return () => {
        removeCookie(ACCESS_TOKEN)
        removeCookie(REFRESH_TOKEN)
    }
}

export function Logout() {
    const cleanCookies = useCleanCookies()
    const navigate = useNavigate()

    useEffect(() => {
        cleanCookies()
        navigate('/login')
    }, [cleanCookies, navigate])

    return null
}

export function RegisterAndLogout() {
    const cleanCookies = useCleanCookies()

    useEffect(() => {
        cleanCookies()
    }, [cleanCookies])

    return <Register />
}