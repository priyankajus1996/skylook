import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarsite from './components/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <>
    <Navbarsite />
    <Routes>
      <Route exact path="/" element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
