import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './Home'; 
import SpotlightEffect from './SpotlightEffect';





function App() {
  return (
    <>
    <Router> 
      <SpotlightEffect>
      <Routes>
        <Route path='/' element={<Home />} /> 
      </Routes> 
      </SpotlightEffect>
    </Router>
    </>
  );
}

export default App;
