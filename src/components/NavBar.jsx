import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='navBackground'>
        <Link to="/" className='navLinks'>HOME</Link>
        <Link to="/About" className='navLinks'>ABOUT</Link>
        <Link to="/Skills" className='navLinks'>SKILLS</Link>
        <Link to="/Projects" className='navLinks'>PROJECTS</Link>
        <Link to="/Contact" className='navLinks'>CONTACT</Link>
      </div>
    </div>
  )
}

export default NavBar