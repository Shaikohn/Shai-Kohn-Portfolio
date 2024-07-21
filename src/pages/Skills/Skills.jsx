import './Skills.css'
import HTML from '../../assets/skills/html.png'
import CSS from '../../assets/skills/css.png'
import Bootstrap from '../../assets/skills/Bootstrap.png'
import JavaScript from '../../assets/skills/javascript.png'
import React from '../../assets/skills/react.png'
import Redux from '../../assets/skills/Redux.png'
import Node from '../../assets/skills/node.png'
import Express from '../../assets/skills/Express.png'
import Java from '../../assets/skills/Java.png'
import Mongo from '../../assets/skills/mongo.png'
import PostgreSQL from '../../assets/skills/postgres.png'
import GitHub from '../../assets/skills/github.png'
import Trello from '../../assets/skills/Trello.png'
import Git from '../../assets/skills/Git.png'
import VisualStudioCode from '../../assets/skills/VisualStudioCode.png'
import IntelliJ from '../../assets/skills/IntelliJ.png'
import MySQL from '../../assets/skills/MySQL.png'
import SpringBoot from '../../assets/skills/SpringBoot.png'

const Skills = () => {
  return (
    <div className='skillsContainer'>
        <h1>My Skills</h1>
        <p>Passionate about new technologies, I keep exploring stuff. Here's the tech stack I've worked with!</p>
        <div className='mySkillsContainer'>
            <h1>FRONT-END</h1>
            <div className='skillsDiv'>
                <div>
                    <img className='skills' src={HTML} />
                    <p>HTML5</p>
                </div>
                <div>
                    <img className='skills' src={CSS} />
                    <p>CSS</p>
                </div>
                <div>
                    <img className='skills' src={Bootstrap} />
                    <p>BOOTSTRAP</p>
                </div>
                <div>
                    <img className='skills' src={JavaScript} />
                    <p>JAVASCRIPT</p>
                </div>
                <div>
                    <img className='skills' src={React} />
                    <p>REACT</p>
                </div>
                <div>
                    <img className='skills' src={Redux} />
                    <p>REDUX</p>
                </div>
            </div>
            <h1>BACK-END</h1>
            <div className='skillsDiv'>
                <div>
                    <img className='skills' src={Node} />
                    <p>NODE</p>
                </div>
                <div>
                    <img className='skills' src={Express} />
                    <p>EXPRESS</p>
                </div>
                <div>
                    <img className='skills' src={Java} />
                    <p>JAVA</p>
                </div>
                <div>
                    <img className='skills' src={SpringBoot} />
                    <p>SPRING BOOT</p>
                </div>
            </div>
            <h1>DATABASES</h1>
            <div className='skillsDiv'>
                <div>
                    <img className='skills' src={Mongo} />
                    <p>MONGODB</p>
                </div>
                <div>
                    <img className='skills' src={PostgreSQL} />
                    <p>POSTGRESQL</p>
                </div>
                <div>
                    <img className='skills' src={MySQL} />
                    <p>MYSQL</p>
                </div>
            </div>
            <h1>TOOLS</h1>
            <div className='skillsDiv'>
                <div>
                    <img className='skills' src={GitHub} />
                    <p>GITHUB</p>
                </div>
                <div>
                    <img className='skills' src={Git} />
                    <p>GIT</p>
                </div>
                <div>
                    <img className='skills' src={Trello} />
                    <p>TRELLO</p>
                </div>
                <div>
                    <img className='skills' src={VisualStudioCode} />
                    <p>VISUAL STUDIO CODE</p>
                </div>
                <div>
                    <img className='skills' src={IntelliJ} />
                    <p>INTELLIJ IDEA</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills