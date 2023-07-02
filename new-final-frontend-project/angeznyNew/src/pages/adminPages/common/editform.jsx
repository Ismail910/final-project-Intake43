import React, { useState } from "react";

const EditForm = ({ employee, handleUpdate, handleClose }) => {
  // console.log(employee);
  const [formData, setFormData] = useState(employee);

  // const handleInputChange = (event) => {
  //   setFormData({
  //     ...formData,
  //     [event.target.name]: event.target.value,
  //   });
  // };
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
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.user.name}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.user.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.user.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.user.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>National ID</label>
            <input
              type="text"
              name="nationalID"
              value={formData.user.nationalID}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Joined Date</label>
            <input
              type="text"
              name="joinedDate"
              value={formData.user.joinedDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input
              type="text"
              name="endDate"
              value={formData.user.endDate}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Profile Picture</label>
            <input
              type="text"
              name="profilePic"
              value={formData.user.profilePic}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              name="country"
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
  );
};

export default EditForm;
