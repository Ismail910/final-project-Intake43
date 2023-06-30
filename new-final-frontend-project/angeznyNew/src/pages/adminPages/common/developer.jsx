import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './userform';
import '../admin.css';

const Developer = () => {
  const [employees, setEmployees] = useState([]);

  const [formData, setFormData] = useState({
     user:{
      name: '',
      email: '',
      password: '',
      phone: '',
      address: '',
      joinedDate: '',
      endDate: '',
      profilePic: '',
      country:'',
     }
  });

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/employee')
      .then(response => {
        console.log(response.data);
        setEmployees(response.data.data || []);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // const handleInputChange = event => {
  //   setFormData({ ...formData, [event.target.name]: event.target.value });
  // };
  
  const handleInputChange = event => {
    setFormData({
      ...formData,
      user: {
        ...formData.user,
        [event.target.name]: event.target.value
      }
    });  };
    
    const handleSubmit = async(event) => {
    event.preventDefault();
    console.log(formData);
    await axios
      .post('http://127.0.0.1:8000/api/register/manager',{name:formData.user.name,
      email:formData.user.email,password:formData.user.password,
      phone:formData.user.phone,
      nationalID:formData.user.nationalID,
    address:formData.user.address,joinedDate:formData.user.joinedDate,endDate:formData.user.endDate,
    country:formData.user.country,
    role:formData.user.role,
    })
      .then(response => {
        console.log(formData);
        setEmployees([...employees, formData]);
        setFormData({
          user:{
          name: '',
          email: '',
          password: '',
          phone: '',
          nationalID:'',
          address: '',
          joinedDate: '',
          endDate: '',
          // profilePic: '',
          country:'',
          // skills: [],
          }
        
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = employeeId => {
    axios
      .delete(`http://127.0.0.1:8000/api/employee/${employeeId}`, {
        headers: {
          Authorization: 'Bearer 7|rg9CBKokDh8YT3ThlLPB068mmCT5CH1UF7lcY8kl',
        },
      })
      .then(response => {
        console.log(response.data);
        setEmployees(employees.filter(employee => employee.id !== employeeId));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className="col main pt-5 mt-3 h-100">
      <UserForm
        formData={formData.user}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />

      <div className="employee-list">
        <h3 className="text-center">Employee List</h3>
        {employees.length > 0 ? (
          <table className="table table-responsive table-striped text-center">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Address</th>
                <th>National ID</th>
                <th>Joined Date</th>
                <th>End Date</th>
                <th>Profile Picture</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map(employee => (
                <tr key={employee.id}>
                  <td>{employee.id}</td>
                  {/* <td>{employee.user.name}</td> */}
                  <td>{employee.user.email}</td>
                  <td>{employee.user.phone}</td>
                  <td>{employee.user.address}</td>
                  <td>{employee.user.nationalID}</td>
                  <td>{employee.user.joinedDate}</td>
                  <td>{employee.user.endDate}</td>
                  <td>{employee.user.profilePic}</td>
                  <td className="d-flex justify-content-evenly">
                    <button className="btn btn-info">Edit</button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(employee.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No employees found.</p>
        )}
      </div>
    </div>
  );
};

export default Developer;
