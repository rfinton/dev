import { BrowserRouter, Link, NavLink, Routes, Route } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Contact from './Contact'
import Resume from './Resume'
import Clock from './Clock'
import homeIcon from './assets/home.svg'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <div className="container">
          <div className="nav-links">
            <Link to="/" className="home-icon"><img width="24" height="24" src={homeIcon} alt="Home" /></Link>
            <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>Experiments</NavLink>
            <NavLink to="/resume" className={({ isActive }) => isActive ? 'active' : ''}>Profile</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Comms</NavLink>
          </div>
          <Clock />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
