import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbarsite from './components/Navbar';
function App() {
  return (
    <>
    <Router>
    <Navbarsite />
    <Routes>
      <Route path='/' exact />
    </Routes>
    </Router>
    </>
  );
}

export default App;
