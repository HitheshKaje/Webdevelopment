import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
  
    <div>
        <nav>
            <ul>
          <li><a href="/">Home</a></li>    
          <li><a href='About'>About</a></li>
          <li><a href='Deatils'>Details</a></li>
          <li><a href='Logout'>Logout</a></li>
               
            </ul>
        </nav>
    
    </div>
  )
}

export default Navbar