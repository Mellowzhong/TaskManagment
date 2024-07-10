import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Login from "./User/Views/Login"
import Register from "./User/Views/Register"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import ProtectedRoute from "./Components/ProtectedRoute"
import { CookiesProvider, useCookies } from 'react-cookie'
import { ACCESS_TOKEN, REFRESH_TOKEN } from "./constants"

export default function App() {
  const [, , removeCookie] = useCookies([ACCESS_TOKEN, REFRESH_TOKEN])

  function cleanCookies() {
    removeCookie(ACCESS_TOKEN)
    removeCookie(REFRESH_TOKEN)
  }

  function Logout() {
    cleanCookies()
    return <Navigate to="/login" />
  }

  function RegisterAndLogout() {
    cleanCookies()
    return <Register />
  }

  return (
    <CookiesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<RegisterAndLogout />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </CookiesProvider>
  )
}