// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EmployeeProvider from './context/EmployeeContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';

ReactDOM.render(
  <React.StrictMode>
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/employeelist" element={<EmployeeList />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
