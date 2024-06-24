import React from 'react'
import { NavLink } from 'react-router-dom'

function NavLinks() {
  return (
    <div className="links">
        <ul>
          <NavLink to="/" className="nav-link" style={{ "--i": "0.05s" }}>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" style={{ "--i": "0.1s" }}>
            About Me
          </NavLink>

          <NavLink
            to="/services"
            className="nav-link"
            style={{ "--i": "0.15s" }}
          >
            Services
          </NavLink>

          <NavLink
            to="/projects"
            className="nav-link"
            style={{ "--i": "0.25s" }}
          >
            Projects
          </NavLink>

          <NavLink to="/contact" className="nav-link" style={{ "--i": "0.3s" }}>
            Contact
          </NavLink>
        </ul>
      </div>
  )
}

export default NavLinks