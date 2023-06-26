import React, { useState, useEffect } from 'react';
import axios from "axios";
import UserForm from "./userform";
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
      <UserForm
        formData={formData}
        setFormData={setFormData}
        createDeveloper={createDeveloper}
      />

      </div>
    </div>
  );
};

export default Developer;
