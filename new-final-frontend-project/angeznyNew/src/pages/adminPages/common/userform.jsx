import React from 'react';

const UserForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <div className="my-2">
    <p>{formData}</p>
      <h3 className="text-center">Add User</h3>
      <div className="row justify-content-center my-3">
        <div className="col-md-6">
          <form className="d-flex flex-column">
            <div className="row my-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="row mb-3">
              <label htmlFor="nationalID">National ID</label>
              <input
                type="number"
                className="form-control"
                id="nationalID"
                name="nationalID"
                value={formData.nationalID}
                onChange={handleInputChange}
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="joinedDate">Joined Date</label>
              <input
                type="date"
                className="form-control"
                id="joinedDate"
                name="joinedDate"
                value={formData.joinedDate}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="row mb-3">
              <label htmlFor="endDate">End Date</label>
              <input
                type="date"
                className="form-control"
                id="endDate"
                name="endDate"
                value={formData.endDate}
                onChange={handleInputChange}
              />
            </div>

            {/* <div className="row mb-3">
              <label htmlFor="profilePic">Profile Picture</label>
              <input
                type="file"
                className="form-control"
                id="profilePic"
                placeholder="Profile Picture"
                name="profilePic"
                value={formData.profilePic}
                onChange={handleInputChange}
              />
            </div>
             */}
            <div className="row mb-3">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                className="form-control"
                id="country"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div> 
            
            <div className="row mb-3">
              <label htmlFor="role">Role</label>
              <select
                className="form-select"
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
              >
                <option value="">Select a role</option>
                <option value="Admin">Admin</option>
                <option value="ProductManager">Product Manager</option>
                <option value="ProductOwner">Product Owner</option>
                <option value="Employee">Employee</option>
              </select>
            </div>


            {/* <div className="row mb-3">
              <label htmlFor="skills">Skills</label>
              <input
                type="text"
                className="form-control"
                id="skills"
                placeholder="Skills"
                name="skills"
                value={formData.skills}
                onChange={handleInputChange}
              />
            </div> */}


            <div className="d-flex justify-content-center my-3">
              <button className="btn btn-primary" onClick={handleSubmit}>
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
