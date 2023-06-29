import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin.css';

const Client = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/client')
      .then(response => {
        console.log(response.data);
        setClients(response.data.data || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="col main pt-5 mt-3">
      <h2 className='text-center'>Client List</h2>
      <div className="client-list">
        {clients.length > 0 ? (
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
              {clients.map(client => (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.user.name}</td>
                  <td>{client.user.email}</td>
                  <td>{client.user.phone}</td>
                  <td>{client.user.address}</td>
                  <td>{client.user.joinedDate}</td>
                  <td>{client.user.endDate}</td>
                  <td>{client.user.profilePic}</td>
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
          <p>No clients found.</p>
        )}
      </div>
    </div>
  );
};

export default Client;
