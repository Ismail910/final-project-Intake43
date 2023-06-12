import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";
function App() {
  useEffect(() => {
    // Perform any additional CometChat functionality here after initialization

    // Create a user
    const uid = "user1";
    const name = "Kevin";
    const authKey = "581f246117c147b5f041cf28049c89388b3fc5cd";
    const user = new CometChat.User(uid);
    user.setName(name);

    CometChat.createUser(user, authKey).then(
      user => {
        console.log("User created:", user);
      },
      error => {
        console.log("Error creating user:", error);
      }
    );
    CometChat.login(uid, authKey).then(
      user => {
        console.log("Login Successful:", { user });    
      },
      error => {
        console.log("Login failed with exception:", { error });    
      }
    );
  }, []);
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div style={{width: '100%', height:'800px' }}>
      	<CometChatUI />
      </div>
  );
}

export default App;
