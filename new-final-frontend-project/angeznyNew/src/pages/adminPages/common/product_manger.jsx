
import React, { useState,useEffect } from 'react';
import UserForm from "./userform";
import axios from 'axios';



const ProductManager = () => {
  const [managers, setManagers] = useState([]);
  const [formData, setFormData] = useState({
    user:{
     name: '',
     email: '',
     password: '',
     nationalID: '',
     address: '',
     joinDate: '',
     endDate: '',
     profilePicture: '',
     country: '',
     phoneNumber: '',
     role: ''
    }});
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
        setManagers([...managers, formData]);
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

  
  const handleDelete = (managerId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/manager/${managerId}`, {
        headers: {
          Authorization: 'Bearer 7|rg9CBKokDh8YT3ThlLPB068mmCT5CH1UF7lcY8kl',
        },
      })
      .then(response => {
        console.log(response.data);
        setManagers(managers.filter(manager => manager.id !== managerId));
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  return (
    <div className='col main pt-5 mt-3'>
      <UserForm
        formData={formData.user}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
      <h2>Product Managers</h2>
      <div className='product-manager'>
        <table className='table table-responsive table-striped text-center table-sm'>
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
                  <button className='btn btn-danger' onClick={() => handleDelete(manager.id)}>Delete</button>
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
