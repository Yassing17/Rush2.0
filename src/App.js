import React from 'react'
import './App.css';
import Home from './pages/HomePage';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

//this is where new pages can be added, so far there is only a home page for the website