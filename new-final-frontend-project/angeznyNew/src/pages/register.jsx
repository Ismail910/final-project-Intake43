import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@material-ui/core";
import { toast } from "react-toastify";
import axios from "axios";
import FormContainer from "./formitems/FormContainer";
import InputField from "./formitems/InputField";
import SelectField from "./formitems//SelectField";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { CometChat } from "@cometchat-pro/chat";
const handleUserChat = () => {
  const appID = "240169ef153c40df";
  const region = "US";
  const authKey = "581f246117c147b5f041cf28049c89388b3fc5cd";
  const appSetting = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(region)
    .build();
  CometChat.init(appID, appSetting).then(
    () => {
      console.log("Initialization completed successfully");
      // You can now proceed with rendering your app or calling the login function.
      var uid = localStorage.getItem("user_id");
      var name = localStorage.getItem("user_userName");
      var user = new CometChat.User(uid);
      user.setName(name);
      CometChat.createUser(user, authKey).then(
        (user) => {
          console.log("user created", user);
        },
        (error) => {
          console.log("error", error);
        }
      );
      // CometChat.login(uid, authKey).then(
      //   (user) => {
      //     console.log("Login Successful:", { user });
      //   },
      //   (error) => {
      //     console.log("Login failed with exception:", { error });
      //   }
      // );
    },
    (error) => {
      console.log("Initialization failed with error:", error);
      // Check the reason for error and take appropriate action.
    }
  );
};
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
            localStorage.setItem(
              "user_userName",
              res.data.client.user.userName
            );
            localStorage.setItem("user_role", "Client");
            localStorage.setItem("token", res.data.token);
            // setCurrentUserData(userData);
            handleUserChat();
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
            localStorage.setItem(
              "user_userName",
              res.data.freelancer.user.userName
            );
            localStorage.setItem("user_id", res.data.freelancer.user.id);
            localStorage.setItem("user_name", res.data.freelancer.user.name);
            localStorage.setItem("user_role", "Freelancer");
            localStorage.setItem("token", res.data.token);
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
        options={[" ", "female"]}
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
