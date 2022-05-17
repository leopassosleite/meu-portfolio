import { Route, Routes } from 'react-router-dom';
import './App.css';
import FreameWork from './Components/About/Framework';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Project from './Components/Project';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/conhecimentos' element={<FreameWork />} />
        <Route path='/projetos' element={<Project />} />
        <Route path='/contato' element={<Contact />} />
      </Routes>
    </>

  );
}

export default App;
