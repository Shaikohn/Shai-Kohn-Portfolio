import React from 'react'
import './Projects.css'
import BAHELITOURS from '../../assets/projects/BAHelitours.png'
import CUEVANIX from '../../assets/projects/Cuevanix.jpg'
import PREGUNTATE from '../../assets/projects/Preguntate.png'
import FEETSIES from '../../assets/projects/Feetsies.png'
import ZTREAMGAMES from '../../assets/projects/Ztream.png'
import DOGS from '../../assets/projects/DogsApp.png'
import MAGICISLAND from '../../assets/projects/MagicIsland.png'
import POKESHAI from '../../assets/projects/PokeShai.png'


const Projects = () => {
  return (
    <div className='projectsContainer'>
        <h1 style={{marginBottom: '20px'}}>MY PROJECTS</h1>
        <div>
            <div className='projectColumn'>
                <div className='projectDiv'>
                    <img className='projectImage' src={POKESHAI} />
                    <h2>POKESHAI | PERSONAL PROJECT</h2>
                    <p className='projectDescription'>POKESHAI is a personal project that includes two games: Who Is That Pokemon? and Higher Or Lower, adapted to the world of Pokemon thanks to the Pokemon API</p>
                    <a className='projectLink' href='https://pokeshai-deploy.vercel.app/' target='_blank'>VIEW LIVE</a>
                </div>
                <div className='projectDiv'>
                    <img className='projectImage' src={MAGICISLAND} />
                    <h2>MAGIC ISLAND | FREELANCE</h2>
                    <p className='projectDescription'>MAGIC ISLAND is a game of 2 or 3 players in which casino challenges are presented to the players and they must compete to see who finishes the game with a better balance of profits.</p>
                    <a className='projectLink' href='https://magicisland.app/' target='_blank'>VIEW LIVE</a>
                </div>
            </div>
            <div className='projectColumn'>
                <div className='projectDiv'>
                    <img className='projectImage' src={BAHELITOURS} />
                    <h2>BA HELITOURS | FREELANCE</h2>
                    <p className='projectDescription'>BA HELITOURS is an e-commerce app to purchase helicopter tours. It has features like a contact form to arrange the tours, a system to see the price of the tour in different types of currency, among other things.</p>
                    <a className='projectLink' href='https://www.bahelitours.com/en/' target='_blank'>VIEW LIVE</a>
                </div>
                <div className='projectDiv'>
                    <img className='projectImage' src={ZTREAMGAMES} />
                    <h2>ZTREAMGAMES | ACADEMIC PROJECT</h2>
                    <p className='projectDescription'>ZTREAMGAMES is an academic project that simulates being an e-commerce app to buy videogames. It has features like a user system, friends system, a cart with payment integration (Stripe), among other features.</p>
                    <a className='projectLink' href='https://ztreamgames.vercel.app/' target='_blank'>VIEW LIVE</a>
                </div>
            </div>
            <div className='projectColumn'>
                <div className='projectDiv'>
                    <img className='projectImage' src={CUEVANIX} />
                    <h2>CUEVANIX | PERSONAL PROJECT</h2>
                    <p className='projectDescription'>CUEVANIX is a personal project that simulates being an e-commerce app to buy series and movies. It has features like a user system, searchbar, a cart with payment integration (Stripe), an inquiry system, among other features.</p>
                    <a className='projectLink' href='https://cuevanix-shaikohn.vercel.app/' target='_blank'>VIEW LIVE</a>
                </div>
                <div className='projectDiv'>
                    <img className='projectImage' src={PREGUNTATE} />
                    <h2>PREGUNTATE | FREELANCE</h2>
                    <p className='projectDescription'>PREGUNTATE is a game in which you are given a question or a situation, which can be thoughtful or fun, depending on the category you choose. It is ideal to have a good time with friends. It has features like an user system, like system, among other features. </p>
                    <a className='projectLink' href='https://preguntate.net/' target='_blank'>VIEW LIVE</a>
                </div>
            </div>
            <div className='projectColumn'>
                <div className='projectDiv'>
                    <img className='projectImage' src={FEETSIES} />
                    <h2>FEETSIES | ACADEMIC PROJECT</h2>
                    <p className='projectDescription'>Feetsies is a personal project that simulates being the page of an animal shelter. In it you can adopt animals, and submit a form to leave an animal at the shelter. It has features like an user system, a cart with payment integration (Stripe), inquiry system, among other things.</p>
                    <a className='projectLink' href='https://feetsies.vercel.app/' target='_blank'>VIEW LIVE</a>
                </div>
                <div className='projectDiv'>
                    <img className='projectImage' src={DOGS} />
                    <h2>DOGS APP | ACADEMIC PROJECT</h2>
                    <p className='projectDescription'>DOGS APP is a personal project that simulates being a basic encyclopedia of dog breeds. It has features like a searchbar, a filter system, a submit form to add breeds, among other things.</p>
                    <a className='projectLink' href='https://dogs-app-shaikohn.vercel.app/' target='_blank'>VIEW LIVE</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects