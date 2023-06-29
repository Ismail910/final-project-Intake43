import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductOwner = () => {
  const [owners, setOwners] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/managers/ProductOwner')
      .then(response => {
        console.log(response.data);
        setOwners(response.data.data || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='col main pt-5 mt-3'>
      <h2>Product Owners</h2>
      <div className='product-owner'>
      
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
          {owners.map(owner => (
            <tr key={owner.id}>
              <td>{owner.id}</td>
              <td>{owner.user.name}</td>
              <td>{owner.user.email}</td>
              <td>{owner.user.phone}</td>
              <td>{owner.user.address}</td>
              <td>{owner.user.joinedDate}</td>
              <td>{owner.user.endDate}</td>
              <td>{owner.user.profilePic}</td>
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
    </div>  
    </div>
  );
};

export default ProductOwner;
