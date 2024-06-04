import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Modal from 'react-modal';
import states from './states'; 
import './EmployeeForm.css'; 

const EmployeeForm = () => {
  const { register, handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      dateOfBirth: new Date(),
      startDate: new Date(),
      street: '',
      city: '',
      state: '',
      zipCode: '',
      department: 'Sales',
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const saveEmployee = (data) => {
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(data);
    localStorage.setItem('employees', JSON.stringify(employees));
    setIsModalOpen(true);
    reset();
  };

  return (
    <div className="form-container">
      <form id="create-employee" onSubmit={handleSubmit(saveEmployee)}>
        <h2>Create Employee</h2>

        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" {...register('firstName', { required: 'First Name is required' })} />
        {errors.firstName && <span className="error">{errors.firstName.message}</span>}

        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" {...register('lastName', { required: 'Last Name is required' })} />
        {errors.lastName && <span className="error">{errors.lastName.message}</span>}

        <label htmlFor="date-of-birth">Date of Birth</label>
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="date-picker"
            />
          )}
        />

        <label htmlFor="start-date">Start Date</label>
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              selected={field.value}
              onChange={(date) => field.onChange(date)}
              className="date-picker"
            />
          )}
        />

        <fieldset className="address">
          <legend>Address</legend>
          <label htmlFor="street">Street</label>
          <input id="street" type="text" {...register('street', { required: 'Street is required' })} />
          {errors.street && <span className="error">{errors.street.message}</span>}

          <label htmlFor="city">City</label>
          <input id="city" type="text" {...register('city', { required: 'City is required' })} />
          {errors.city && <span className="error">{errors.city.message}</span>}

          <label htmlFor="state">State</label>
          <select id="state" {...register('state', { required: 'State is required' })}>
            <option value="">Select State</option>
            {states.map((state) => (
              <option key={state.abbreviation} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
          {errors.state && <span className="error">{errors.state.message}</span>}

          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" {...register('zipCode', { required: 'Zip Code is required' })} />
          {errors.zipCode && <span className="error">{errors.zipCode.message}</span>}
        </fieldset>

        <label htmlFor="department">Department</label>
        <select id="department" {...register('department')}>
          <option>Sales</option>
          <option>Marketing</option>
          <option>Engineering</option>
          <option>Human Resources</option>
          <option>Legal</option>
        </select>

        <button type="submit" className="save-button">Save</button>
      </form>
      <Modal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} className="modal">
        <div>Employee Created!</div>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default EmployeeForm;
