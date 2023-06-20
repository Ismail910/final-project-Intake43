import React from 'react';
import { createRoot } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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
    createRoot(document.getElementById('root')).render(<App />);
  },
  error => {
    console.log("Initialization failed with error:", error);
    // Check the reason for error and take appropriate action.
  }
);

reportWebVitals();
