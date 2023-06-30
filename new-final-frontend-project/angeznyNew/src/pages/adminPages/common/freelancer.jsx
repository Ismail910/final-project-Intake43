import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './userform';
import '../admin.css';

const Freelancer = () => {
  const [freelancers, setFreelancers] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/freelancer')
      .then(response => {
        console.log(response.data);
        setFreelancers(response.data.data || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="col main pt-5 mt-3 h-100">
      <h2 className='text-center'>Freelancer List</h2>
      <div className="freelancer-list">
        {freelancers.length > 0 ? (
          <table className='table table-responsive table-striped text-center'>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Joined Date</th>
                <th>End Date</th>
                <th>Profile Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {freelancers.map(freelancer => (
                <tr key={freelancer.id}>
                  <td>{freelancer.id}</td>
                  <td>{freelancer.user.name}</td>
                  <td>{freelancer.user.email}</td>
                  <td>{freelancer.user.phone}</td>
                  <td>{freelancer.user.address}</td>
                  <td>{freelancer.user.joinedDate}</td>
                  <td>{freelancer.user.endDate}</td>
                  <td>{freelancer.user.profilePic}</td>
                  <td className='d-flex justify-content-evenly'>
                   <button className='btn btn-info'>
                    Edit
                    </button>
                  <button className='btn btn-danger'>
                    Delete
                  </button>
              </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No freelancers found.</p>
        )}
      </div>
    </div>
  );
};

export default Freelancer;
