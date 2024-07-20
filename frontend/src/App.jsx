import Login from "./User/Views/Login"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import ProtectedRoute from "./Components/ProtectedRoute"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Logout, RegisterAndLogout } from "./Utilities/Logout"
import { CookiesProvider } from 'react-cookie'
import "./Styles/Index.css";

export default function App() {

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