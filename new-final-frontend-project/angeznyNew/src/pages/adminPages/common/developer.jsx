import React, { useState, useEffect } from 'react';
import axios from "axios";
import  "../admin.css";
const Developer = () => {
  const [developers, setDevelopers] = useState([
  
  ]);
  

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    nationalID: '',
    address: '',
    joinedDate: '',
    endDate: '',
    profilePic: '',
    country:'',
    phoneNumber: '',
    role:''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        setDevelopers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const createDeveloper = () => {
    const newDeveloper = {
      id: developers.length + 1,
      ...formData,
    };

    setDevelopers([...developers, newDeveloper]);
    setFormData({
      name: '',
      email: '',
      password: '',
      nationalID: '',
      address: '',
      joinedDate: '',
      endDate: '',
      profilePic: '',
      phone: '',
      role:'',
      country:'',
    });
  };

  const updateDeveloper = (developerId) => {
    const updatedDeveloper = {
      ...formData,
    };

    setDevelopers(
      developers.map((developer) =>
        developer.id === developerId ? { ...developer, ...updatedDeveloper } : developer
      )
    );
    setFormData({
      name: '',
      email: '',
      password: '',
      nationalId: '',
      address: '',
      joinDate: '',
      endDateDate: '',
      profilePicture: '',
      phoneNumber: '',
    });
  };

  const deleteDeveloper = (developerId) => {
    setDevelopers(developers.filter((developer) => developer.id !== developerId));
  };
  
  
  return (
    <div className="col main pt-5 mt-3">
      <div className='row '>
      <div className="table-sm-responsive table-bordered">
      <h2 className='text-center'>Developers</h2>
      <table className='table table-striped text-center'>
        {/* Table header */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>National ID</th>
            <th>Address</th>
            <th>Join Date</th>
            <th>end Date</th>
            <th>Profile Picture</th>
            <th>Phone Number</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {developers.map((developer) => (
            <tr key={developer.id}>
              <td>{developer.name}</td>
              <td>{developer.email}</td>
              <td>{developer.nationalID}</td>
              <td>{developer.address}</td>
              <td>{developer.joinedDate}</td>
              <td>{developer.endDate}</td>
              <td>{developer.profilePic}</td>
              <td>{developer.phone}</td>
              <td>{developer.country}</td>
              <td className='d-flex justify-content-evenly'>
                <button className='btn btn-info' onClick={() => updateDeveloper(developer.id)}>
                  Edit
                </button>
                <button className='btn btn-danger' onClick={() => deleteDeveloper(developer.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
      {/* Add Developer form */}
      <div className='container'>
        <h3 className='text-center my-3'>Add Developer</h3>
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
                  {['Admin', 'Product Manager', 'Product Owner', 'Freelancer', 'Client', 'Employee'].map((role) => (
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
                  Add Developer
                </button>
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
