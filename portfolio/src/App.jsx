
import './App.css'
import Contact from './Home/Contact/contact'
import Exp from './Home/Experience/Exp'
import Intro from './Home/Intro/Intro'
import Navbar from './Home/navbar/Navbar'
import Projects from './Home/projects/Projects'

function App() {

  return (
    <>
    <div className='bg-[#20242d]'>
      <Navbar/>
      <Intro/>
    </div>
      <Projects/>
      <Exp/>
      <Contact/>
    </>
  )
}

export default App
