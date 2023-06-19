import React, { useState } from 'react';

const Developer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    nationalId: '',
    address: '',
    joinDate: '',
    profilePicture: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any form submission logic here
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="responsive-form">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
         class="form-control"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="nationalId">National ID:</label>
        <input
          type="text"
          id="nationalId"
          name="nationalId"
          value={formData.nationalId}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <textarea
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="joinDate">Join Date:</label>
        <input
          type="date"
          id="joinDate"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="profilePicture">Profile Picture:</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phoneNumber">Phone Number:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
      </div>

      <button type="submit" className="btn btn-outline-primary">
        Submit
      </button>
    </form>
  );
};

export default Developer;
