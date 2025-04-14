import { useEffect } from "react"
import Cookie from "js-cookie"
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom"
import Layout from "./layout/layout"
import Teachers from "./pages/teachers"
import Home from "./pages/home"
import Courses from "./pages/course"
import Students from "./pages/students"
import Profile from "./pages/profile"
import Login from "./pages/login"

function App() {
  return (
    <Router>
      <AuthHandler />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teachers />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/students" element={<Students />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

function AuthHandler() {
  const navigate = useNavigate()

  useEffect(() => {
    const authRouter = () => {
      if (!Cookie.get('userEmail')) {
        navigate('/login')
      }
    }
    authRouter()
  }, [navigate])

  return null
}

export default App