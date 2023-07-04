// DeveloperForm.js
import React from 'react';

const Userform = ({ formData, setFormData, createDeveloper }) => {
  return (
    <div className='my-2'>
        <h3 className='text-center '>Add User</h3>
        <div className='row justify-content-center my-3 '>
          <div className='col-md-6 '>
            <form className='d-flex flex-column '>
              <div className='row my-3'>
                <label htmlFor='name' >
                  Name
                </label>
                  <input type='text' className='form-control' id='name' placeholder='Name'value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })} required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='email'>
                  Email
                </label>
                  <input
                    type='email' className='form-control' id='email' placeholder='Email' value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })} required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='password'>
                  Password
                </label>
                  <input
                    type='password'className='form-control' id='password'placeholder='Password'value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='nationalId'>
                  National ID
                </label>
  
                  <input type='text' className='form-control' id='nationalId' placeholder='National ID' value={formData.nationalId}
                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })} required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='address'>
                  Address
                </label>
              
                  <input
                    type='text'className='form-control' id='address'placeholder='Address' value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}required/>
              </div>
              
              <div className='row mb-3'>
                <label htmlFor='role'>Role</label>
                <select
                  className='form-control' id='role' value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })} required>

                  <option value=''>Select a role</option>
                  {['Admin', 'Product Manager', 'Product Owner','Employee'].map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              <div className='row mb-3'>
                <label htmlFor='joinDate'>
                  Join Date
                </label>
                  <input type='date'className='form-control'
                    id='joinDate'placeholder='Join Date'value={formData.joinDate}
                    onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })} required/>
              </div>
                  
              <div className='row mb-3'>
                <label htmlFor='endDate'>
                  End Date
                </label>
                  <input
                    type='date'className='form-control'id='endDate'placeholder='end Date'value={formData.joinDate}
                    onChange={(e) => setFormData({ ...formData, endDate: e.target.value })}required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='profilePicture'>
                  Profile Picture URL
                </label>
                  <input
                    type='file'className='form-control' id='profilePicture'placeholder='Profile Picture URL'value={formData.profilePicture}
                    onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })} required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='phoneNumber' className='col-form-label'>
                  Phone Number
                </label>
                  <input
                    type='text'className='form-control'id='phoneNumber'placeholder='Phone Number'value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}required/>
              </div>

              <div className='row mb-3'>
                <label htmlFor='country'>
                  Country
                </label>
                  <input
                    type='text'className='form-control'id='text'placeholder='Country'value={formData.Country}
                    onChange={(e) => setFormData({ ...formData, Country: e.target.value })}required/>
              </div>

              <div className='d-flex justify-content-center my-3'>
                <button className='btn btn-primary' onClick={createDeveloper}>
                  Add User
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
  );
};

export default Userform;
