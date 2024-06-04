import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Projects from './pages/Projects';
import Experiences from './pages/Experiences';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <>
      <div className="App">
        <Router>
        <Navbar/>
          <Routes>
            <Route path='/' element={ <Homepage/>}/>
            <Route path='/skills' element={ <Skills/> }/>
            <Route path='/experiences' element={ <Experiences/> }/>
            <Route path='/projects' element={ <Projects/> }/>
            <Route path='/contact' element={ <Contact/> }/>
            <Route path='/project/:id/*' element={ <ProjectDisplay/> }/>
          </Routes>
        </Router>
      </div>
      <Footer/>
    </>
    
  );
}

export default App;
