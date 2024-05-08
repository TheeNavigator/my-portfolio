import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Home from './components/home/Home'
import Navbar from './components/navbar/Navbar'
import Services from './components/service/Services'
import Project from './components/work/Project'

const App = () => {

  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
