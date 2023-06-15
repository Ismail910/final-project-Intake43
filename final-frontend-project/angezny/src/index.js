import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

import { CometChat } from "@cometchat-pro/chat";
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
    ReactDOM.render(<App />, document.getElementById('root'));
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
