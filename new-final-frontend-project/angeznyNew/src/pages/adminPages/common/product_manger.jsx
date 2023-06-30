import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductManager = () => {
  const [managers, setManagers] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/managers/ProductManager')
      .then(response => {
        console.log(response.data);
        setManagers(response.data.data || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='col main pt-5 mt-3'>
      <h2>Product Managers</h2>
      <div className='product-manager'>
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
            {managers.map(manager => (
              <tr key={manager.id}>
                <td>{manager.id}</td>
                <td>{manager.user.name}</td>
                <td>{manager.user.email}</td>
                <td>{manager.user.phone}</td>
                <td>{manager.user.address}</td>
                <td>{manager.user.joinedDate}</td>
                <td>{manager.user.endDate}</td>
                <td>{manager.user.profilePic}</td>
                <td className='d-flex justify-content-evenly'>
                  <button className='btn btn-info'>Edit</button>
                  <button className='btn btn-danger'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductManager;
