import React from 'react'
import './NavLinks.css'
import { Link } from 'react-router-dom'

const NavLink = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <Link to="/">ALL USERS</Link>
      </li>
      <li>
        <Link to="/user">USERS</Link>
      </li>
      <li>
        <Link to="/places">ADD PLACE</Link>
      </li>
    </ul>
  )
}

export default NavLink