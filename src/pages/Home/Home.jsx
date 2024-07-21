import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import PhotoCV from '../../assets/PhotoCV.png'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

const Home = () => {
  return (
    <div className='homeContainer'>
      <div>
      <p className='paragraphHome'>Hi, my name is</p>
      <h1 className='title'>SHAI KOHN</h1>
      <p className='paragraphHome'>I am a Full Stack Web Developer</p>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
        <Link to='/About'><button className='homeButtons'>More about me</button></Link>
        <Link to='Contact'><button className='homeButtons'>Contact me</button></Link>
      </div>
      <div className='homeLinksContainer'>
        <a href='https://www.linkedin.com/in/shai-kohn/?locale=en_US' target='_blank'><FaLinkedin className='homeLinks' color='blue' size={70} style={{backgroundColor: 'white'}} /></a>
        <a href='https://github.com/Shaikohn' target='_blank'><FaGithub className='homeLinks' color='white' size={70} style={{backgroundColor: 'gray'}} /></a>
        <a href='https://drive.google.com/file/d/1tft5n6jIYdavwUjakp2XRAYxUnHlQwo0/view' target='_blank'><ImProfile className='homeLinks' color='white' size={70} style={{backgroundColor: 'black', paddingRight: '6px'}} /></a>
      </div>
      </div>
      <img className='photoCV' src={PhotoCV} />
    </div>
  )
}

export default Home