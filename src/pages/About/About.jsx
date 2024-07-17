import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='aboutContainer'>
        <h1>ABOUT ME</h1>
        <div className='infoContainer'>
        <div>
            <h2>FULL STACK DEVELOPER</h2>
            <p className='info'>I'm a Full Stack Developer with training as a Web Designer and C2 Advanced English level. Experience programming in NodeJS, React, Redux, MongoDB, among other technologies in the sector. My skills include responsibility and commitment to meeting objectives, analytical skills, problem solving and teamwork.</p>
        </div>
        <div>
            <h2>FRONT-END DEVELOPER</h2>
            <p className='info'>I'm a Front-End Developer with experience in different programming languages. I generally work with JavaScript or one of its frameworks, such as React, and I use tools like Figma to design web pages.</p>
        </div>
        <div>
            <h2>BACK-END DEVELOPER</h2>
            <p className='info'>I'm a Back-End Developer with experience in NodeJS (with Express) and Java, but I generally work with the first one. Regarding databases, I mainly use MongoDB and PostgreSQL, although I also have experience in MySQL</p>
        </div>
        </div>
    </div>
  )
}

export default About