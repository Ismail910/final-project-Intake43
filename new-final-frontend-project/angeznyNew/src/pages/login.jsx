import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { toast } from 'react-toastify';
import axios from 'axios';
import FormContainer from './formitems/FormContainer';
import InputField from './formitems/InputField';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Perform form validation
      if (!email || !password) {
        toast.error('Please fill in all fields');
        return;
      }

      // Send login request to the server using Axios
       await axios.post('http://127.0.0.1:8000/api/login', {
        email,
        password,
      }).then((res)=>{
        localStorage.setItem("user_id", res.data.id);
        localStorage.setItem("user_name", res.data.name);
        localStorage.setItem("user_role", res.data.role);
        localStorage.setItem("token", res.data.access_token);
        // const userData = res.data;
        // setIsLoading(false);
        // toast.success('Logged in successfully!');
        switch (res.data.role) {
          case "Admin":
            toast.success('Login successful');
            navigate("/admin/");
            break;
          case "Client":
            toast.success('Login successful');
            navigate("/client");
            break;
          case "Freelancer":
            toast.success('Login successful');
            navigate("/freelancer");
            break;
          case "Employee":
            toast.success('Login successful');
            navigate("/employee");
            break;
          case "ProductManager":
            toast.success('Login successful');
            navigate("/manager");
            break;
          case "ProductOwner":
            toast.success('Login successful');
            navigate("/owner");
            break;
          default:
            navigate("/register");
            break;
        }
      }).catch((err)=>{
        toast.error(err.response.data.error);
        console.log(err);
      });

    } catch (error) {
      // Handle error cases
      toast.error('Failed to log in');
    }
  };

  return (
    <FormContainer title="Login" onSubmit={handleLogin}>
      <InputField
      className="mt-5"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <InputField
       className="mt-5"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary"  className="mt-5">
        SinIn
      </Button>
      <Link className="nav-link text-secondary " to="/register">
      <Button  variant="contained" color="primary"  className="mt-5">
        SinUp
      </Button>
      </Link>
                 
              
    </FormContainer>
    
  );
};

export default Login;



