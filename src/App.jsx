// src/App.js

import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
function App() {



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;