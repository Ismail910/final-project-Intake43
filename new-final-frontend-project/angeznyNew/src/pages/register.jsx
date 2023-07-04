import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import axios from "axios";
import FormContainer from "./formitems/FormContainer";
import InputField from "./formitems/InputField";
import SelectField from "./formitems//SelectField";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("Client");
  const [gender, setGender] = useState("male");

  const handleRegister = async (e) => {
    e.preventDefault();
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1; // add 1 because month is zero-based
    const day = currentDate.getDate();
    const formattedDate = `${year}-${month}-${day}`;
    console.log(email);
    console.log(password);
    console.log(name);
    console.log(userName);
    console.log(gender);
    console.log(role);

    try {
      // Perform form validation
      if (!name || !userName || !email || !password || !role || !gender) {
        toast.error("Please fill in all fields");
        return;
      }

      // Send registration request to the server using Axios
      if (role == "Client") {
        await axios
          .post("http://127.0.0.1:8000/api/register/client", {
            name,
            userName,
            email,
            password,
            role,
            gender,
            joinedDate: formattedDate,
          })
          .then((res) => {
            console.log(res);
            localStorage.setItem("user_id", res.data.client.user.id);
            localStorage.setItem("user_name", res.data.client.user.name);
            localStorage.setItem("user_userName", res.data.userName);
            localStorage.setItem("user_role", "Client");
            localStorage.setItem("token", res.data.token);
            // setCurrentUserData(userData);
            toast.success("Registration successful");
            navigate("/");
          })
          .catch((error) => {
            toast.error("register failed!");
            toast.error(error.res.data.message);
            console.log(error);
          });
      } else {
        await axios
          .post("http://127.0.0.1:8000/api/register/freelancer", {
            name,
            userName,
            email,
            password,
            role,
            gender,
            joinedDate: formattedDate,
          })
          .then((res) => {
            const userData = res.data;
            localStorage.setItem("user_id", res.data.client.user.id);
            localStorage.setItem("user_name", res.data.client.user.name);
            localStorage.setItem("user_role", "Client");
            localStorage.setItem("user_access_token", res.data.token);
            // setCurrentUserData(userData);
            toast.success("Registration successful");
            navigate("/");
          })
          .catch((error) => {
            toast.error("register failed freelanser!");
            toast.error(error.res.data.message);
            console.log(error);
          });
      }
    } catch (error) {
      // Handle error cases
      toast.error("Failed to register");
    }
  };

  return (
    <FormContainer title="Register" onSubmit={handleRegister}>
      <InputField
        className="mt-4"
        label="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputField
        className="mt-4"
        label="Username"
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <InputField
        className="mt-4"
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputField
        className="mt-4"
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <SelectField
        className="mt-4"
        label="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        options={["Client", "Freelancer"]}
      />
      <SelectField
        className="mt-4"
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        options={["Male", "Female"]}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className="mt-4"
      >
        SinUp
      </Button>
      <Link className="nav-link text-secondary " to="/login">
        <Button variant="contained" color="primary" className="mt-5">
          SinIn
        </Button>
      </Link>
    </FormContainer>
  );
};

export default Register;
