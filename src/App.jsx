import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Skills from './pages/Skills/Skills'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/Projects' element={<Projects />} />
        <Route exact path='Skills' element={<Skills />} />
        <Route exact path='About' element={<About />} />
        <Route exact path='Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
