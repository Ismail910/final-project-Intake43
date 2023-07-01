
import React, { useState } from 'react';

const EditForm = ({ employee, handleUpdate, handleClose }) => {
  const [formData, setFormData] = useState(employee);

  const handleInputChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    handleUpdate(formData);
  };

  return (
    <div className="edit-form my-2">
      <h3 className="text-center">Edit Employee</h3>
      <div className="row justify-content-center my-3">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>National ID</label>
            <input
              type="text"
              name="nationalID"
              value={formData.nationalID}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Joined Date</label>
            <input
              type="text"
              name="joinedDate"
              value={formData.joinedDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Profile Picture</label>
            <input
              type="text"
              name="profilePic"
              value={formData.profilePic}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-buttons">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;