import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home/Home';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Sessions from './Components/Pages/Sessions/Sessions';
import About from './Components/Pages/About/About';
import Error from './Components/Pages/Error/Error';
import Header from './Components/Shared/Header/Header';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
