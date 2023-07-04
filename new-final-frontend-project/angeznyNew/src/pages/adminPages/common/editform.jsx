import React, { useState } from "react";

const EditForm = ({ employee, handleUpdate, handleClose }) => {
  // console.log(employee);
  const [formData, setFormData] = useState(employee);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      user: {
        ...prevFormData.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    handleUpdate(formData);
  };

  return (
    <div className="edit-form my-2">
      <h3 className="text-center">Edit Employee</h3>
      <div className="row justify-content-center my-3">
      <div className="col-md-6 col-sm-12">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <div className="row my-3">
              <label>Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.user.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="row my-3">
              <label>Email</label>
              <input
                type="email"
                name="email"
                className="form-control disabled"
                value={formData.user.email}
                onChange={handleInputChange}
              />
            </div>

            <div className="row my-3">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                className="form-control"
                value={formData.user.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>Address</label>
              <input
                type="text"
                name="address"
                className="form-control"
                value={formData.user.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>National ID</label>
              <input
                type="text"
                name="nationalID"
                className="form-control"
                value={formData.user.nationalID}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>Joined Date</label>
              <input
                type="text"
                name="joinedDate"
                className="form-control"
                value={formData.user.joinedDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>End Date</label>
              <input
                type="text"
                name="endDate"
                className="form-control"
                value={formData.user.endDate}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>Profile Picture</label>
              <input
                type="text"
                name="profilePic"
                className="form-control"
                value={formData.user.profilePic}
                onChange={handleInputChange}
              />
            </div>
            <div className="row mb-3">
              <label>Country</label>
              <input
                type="text"
                name="country"
                className="form-control"
                value={formData.user.country}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-buttons">
              <button type="submit" className="btn btn-primary">
                Update
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={handleClose}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;