// src/App.js
import React from 'react';
import './App.css';
import EmployeeForm from './components/EmployeeForm';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
      <Link to="/employeelist">View Current Employees</Link> 
        <h2>Create Employee</h2>
        <EmployeeForm />
      </div>
    </div>
  );
}

export default App;
