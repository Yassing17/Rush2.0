import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactPage from './pages/ContactPage';
import './index.css';


ReactDOM.render(
  
    <Router>
        <Routes>
          <Route path='/' element={<App />}/>
          <Route path='/ContactPage' element={<ContactPage/>}/>  
        </Routes>
    </Router>,
  
    document.getElementById('root')
);

