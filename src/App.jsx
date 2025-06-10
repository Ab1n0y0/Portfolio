import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css'; 
import './App.css';
import Home from './components/Home';
import DataAnalyst from './components/DataAnalyst';
import AiExplorer from "./components/AiExplorer";


const App = () => {
  return (
    <Router>
      <div className="font-sans scroll-smooth">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/data-analyst" element={<DataAnalyst />} />
          <Route path="/aiml" element={< AiExplorer />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;