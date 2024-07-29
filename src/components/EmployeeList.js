import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import './EmployeeList.css'; 

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [totalEmployees, setTotalEmployees] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(employees);
    setTotalEmployees(employees.length); // Assuming client-side pagination
  }, []);

  const filteredEmployees = employees.filter(employee =>
    employee.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const columns = [
    { name: "First Name",  selector: (row) => row.firstName, sortable: true  },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    { name: "Start Date", selector: (row) => row.startDate, sortable: true },
    { name: "Department", selector: (row) => row.department, sortable: true },
    {
      name: "Date of Birth",
      selector: (row) => row.dateOfBirth,
      sortable: true,
    },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  return (
    <div id="employee-div" className="container">
      <Link to="/" className="home-button">Back to Home </Link>

      <h1>Current Employees</h1>
      <input 
        type="text" 
        placeholder="Search Employee" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      <DataTable
        columns={columns}
        data={filteredEmployees}
        pagination
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 30]}
        paginationComponentOptions={{ rowsPerPageText: 'Rows per page:' }}
        highlightOnHover
        striped
        paginationTotalRows={totalEmployees} 
        noDataComponent={<p className="no-employees">No employees found</p>}
      />
    </div>
  );
};

export default EmployeeList;
