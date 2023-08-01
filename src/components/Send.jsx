'use client';

import { useState } from 'react';
import sendData from '../database/sendData';

function Input({ name, value, handleChange }) {
  return (
    <input type="text" name={name} value={value} onChange={handleChange} />
  );
}

const fields = ['surname', 'firstName', 'email', 'matricNumber'];

export default function Send() {
  const [FormData, setFormData] = useState({
    surname: '',
    firstName: '',
    email: '',
    matricNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('')
    } catch (error) {
      
    }
    // Add the current date and time to the form data
    const submissionData = {
      ...FormData,
      date_created: new Date(),
    };

    // Call the function to send data to MySQL
    await sendData(submissionData);

    // Reset the form fields after sending data
    setFormData({
      surname: '',
      firstName: '',
      email: '',
      matricNumber: '',
    });
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        {fields.map((field) => (
          <Input
            name={field}
            value={FormData.field}
            handleChange={handleInputChange}
          />
        ))}
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
