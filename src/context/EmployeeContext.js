// src/context/EmployeeContext.js
import React, { createContext, useState } from 'react';

export const EmployeeContext = createContext();

const EmployeeProvider = ({ children }) => {
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employees')) || []);

  const addEmployee = (employee) => {
    const newEmployees = [...employees, employee];
    setEmployees(newEmployees);
    localStorage.setItem('employees', JSON.stringify(newEmployees));
  };

  return (
    <EmployeeContext.Provider value={{ employees, addEmployee }}>
      {children}
    </EmployeeContext.Provider>
  );
};

export default EmployeeProvider;
