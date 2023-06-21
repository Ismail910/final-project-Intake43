import React, { useState } from 'react';
import  "../admin.css";
const Developer = () => {
  const [developers, setDevelopers] = useState([
    // Existing developer data
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    nationalId: '',
    address: '',
    joinDate: '',
    profilePicture: '',
    phoneNumber: '',
  });

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
      nationalId: '',
      address: '',
      joinDate: '',
      profilePicture: '',
      phoneNumber: '',
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
      profilePicture: '',
      phoneNumber: '',
    });
  };

  const deleteDeveloper = (developerId) => {
    setDevelopers(developers.filter((developer) => developer.id !== developerId));
  };

  return (
    <div>
      <h2 className='text-center'>Developers</h2>
      <table className='table table-striped text-center'>
        {/* Table header */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>National ID</th>
            <th>Address</th>
            <th>Join Date</th>
            <th>Profile Picture</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        {/* Table body */}
        <tbody>
          {developers.map((developer) => (
            <tr key={developer.id}>
              <td>{developer.name}</td>
              <td>{developer.email}</td>
              <td>{developer.password}</td>
              <td>{developer.nationalId}</td>
              <td>{developer.address}</td>
              <td>{developer.joinDate}</td>
              <td>{developer.profilePicture}</td>
              <td>{developer.phoneNumber}</td>
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
      {/* Add Developer form */}
      <div className='container'>
        <h3 className='text-center'>Add Developer</h3>
        <div className='row justify-content-center my-3 '>
          <div className='col-md-6 mx-5'>
            <form className='d-flex flex-column border border-1 rounded '>
              <div className='row my-3'>
                <label htmlFor='name' className='col-sm-2 col-form-label' >
                  Name
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='email' className='col-sm-2 col-form-label'>
                  Email
                </label>
                <div className='col-sm-10'>
                  <input
                    type='email'
                    className='form-control'
                    id='email'
                    placeholder='Email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='password' className='col-sm-2 col-form-label'>
                  Password
                </label>
                <div className='col-sm-10'>
                  <input
                    type='password'
                    className='form-control'
                    id='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='nationalId' className='col-sm-2 col-form-label'>
                  National ID
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='nationalId'
                    placeholder='National ID'
                    value={formData.nationalId}
                    onChange={(e) => setFormData({ ...formData, nationalId: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='address' className='col-sm-2 col-form-label'>
                  Address
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='address'
                    placeholder='Address'
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='joinDate' className='col-sm-2 col-form-label'>
                  Join Date
                </label>
                <div className='col-sm-10'>
                  <input
                    type='date'
                    className='form-control'
                    id='joinDate'
                    placeholder='Join Date'
                    value={formData.joinDate}
                    onChange={(e) => setFormData({ ...formData, joinDate: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='profilePicture' className='col-sm-2 col-form-label'>
                  Profile Picture URL
                </label>
                <div className='col-sm-10'>
                  <input
                    type='file'
                    className='form-control'
                    id='profilePicture'
                    placeholder='Profile Picture URL'
                    value={formData.profilePicture}
                    onChange={(e) => setFormData({ ...formData, profilePicture: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className='row mb-3'>
                <label htmlFor='phoneNumber' className='col-sm-2 col-form-label'>
                  Phone Number
                </label>
                <div className='col-sm-10'>
                  <input
                    type='text'
                    className='form-control'
                    id='phoneNumber'
                    placeholder='Phone Number'
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    required
                  />
                </div>
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
