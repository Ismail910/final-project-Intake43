import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './userform';

const ProductOwner = () => {
  const [owners, setOwners] = useState([]);
   
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
      setOwners([...owners, formData]);
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
  
  const handleInputChange = event => {
    setFormData({
      ...formData,
      user: {
        ...formData.user,
        [event.target.name]: event.target.value
      }
    });  };
    
    


  const handleDelete = (ownerId) => {
    axios
      .delete(`http://127.0.0.1:8000/api/owner/${ownerId}`, {
        headers: {
          Authorization: 'Bearer 7|rg9CBKokDh8YT3ThlLPB068mmCT5CH1UF7lcY8kl',
        },
      })
      .then(response => {
        console.log(response.data);
        setOwners(owners.filter(owner => owner.id !== ownerId));
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

      <h2>Product Owners</h2>
      <div className='product-owner'>
      
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
                  <button className='btn btn-danger' onClick={() => handleDelete(owner.id)}>
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
