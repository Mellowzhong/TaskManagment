import { useCookies } from 'react-cookie'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants"
import Register from "../User/Views/Register"
import { Navigate } from "react-router-dom"

export function Logout({ cleanCookies }) {
    const [, , removeCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN])

    function cleanCookies() {
        removeCookie(ACCESS_TOKEN)
        removeCookie(REFRESH_TOKEN)
    }

    return <Navigate to="/login" />
}

export function RegisterAndLogout() {
    const [, , removeCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN])

    function cleanCookies() {
        removeCookie(ACCESS_TOKEN)
        removeCookie(REFRESH_TOKEN)
    }

    cleanCookies()
    return <Register />
}