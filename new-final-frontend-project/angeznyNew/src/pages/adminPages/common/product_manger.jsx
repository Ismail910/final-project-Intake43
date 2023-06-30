import React, { useState } from 'react';
import UserForm from "./userform";
const ProductManger = () => {
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
   }
  });

  const createDeveloper = () => {
    
    console.log(formData);
  };

  return (
    <div className='col main pt-5 mt-3'>
      <UserForm formData={formData} setFormData={setFormData} createDeveloper={createDeveloper} />
    </div>
  );
};

export default ProductManger;
