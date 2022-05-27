import { Route, Routes } from 'react-router-dom';
import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { About, Contact, Home, NotFound } from './pages';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/city" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        {/*Cualquier otra ruta no definida - 404 not found - not match  */}
        <Route path="*" element={<NotFound/>} />       
      </Routes>
      <footer align="center">
      <p>&copy;2022 Pronostico App - with Devlights BootCamp2022 </p>
      <p>All rights reserved - Canteros Lucas</p>
      </footer>
    </div>
  );
}

export default App;