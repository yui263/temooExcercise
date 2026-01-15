import logo from './logo.svg';
import './App.css'; 
import { BrowserRouter as Router } from 'react-router-dom'; 
import { Routes, Route } from 'react-router-dom'; 
import Home from './Home'; 
import SpotlightEffect from './SpotlightEffect'; 
import Treseicinque from './Treseicinque'; 
import Teams from './Teams'; 
import Chatbot from './Copilot';
import Oss from './Oss'; 
import TemooSecond from './TemooSecond';
import TemooThird from './TemooThird';
import TemooFourth from './TemooFourth'; 
import Login from './Login'; 
import Benvenuto from './Benvenuto'; 
import Auth0ProviderWithNavigate from './Auth0ProviderWithNavigate'; 










function App() {
  return (
    <>
    <Router>  
      <SpotlightEffect> 
        <Auth0ProviderWithNavigate>
      <Routes>
        <Route path='/' element={<Home />} />  
        <Route path='/temoo365' element={<Treseicinque/>} />
        <Route path='/teams' element={<Teams/>} /> 
        <Route path='/copilot-emulator' element={<Chatbot/>} /> 
        <Route path='/os-overview' element={<Oss/>} /> 
        <Route path='sito-1' element={<TemooSecond />} /> 
        <Route path='sito-2' element={<TemooThird />} /> 
        <Route path='sito-3' element={<TemooFourth />} />
        <Route path='/login' element={<Login/>} /> 
        <Route path='/welcome' element={<Benvenuto/>} />  
      </Routes> 
      </Auth0ProviderWithNavigate> 
      </SpotlightEffect>
    </Router>
    </>
  );
}

export default App;
