import React from 'react'
import './App.css';
import Home from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import {Link as LinkS} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

//this is where new pages can be added, so far there is only a home page for the website