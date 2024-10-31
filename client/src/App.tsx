import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CreateParty from './pages/newParty';
import Home from './pages/home';

function App() {

  return (
    <>
    <Router>
      <nav>
      <Link to="/">Home</Link> | <Link to="/newParty">New Party</Link>
      </nav>
      <Routes>
        <Route path="/newParty" element={<CreateParty />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
