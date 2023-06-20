import './App.css';
import React, { useEffect, useState } from 'react';
import { CometChat } from "@cometchat-pro/chat";
import { CometChatUI } from "./cometchat-pro-react-ui-kit/CometChatWorkspace/src";

function App() {
  const [selectedUserUID, setSelectedUserUID] = useState(null);
  const [conversationID, setConversationID] = useState(null);

  const openChatWithUser = () => {
    const uid = 'user2';

    CometChat.getUser(uid).then(
      user => {
        setSelectedUserUID(user.uid);
        setConversationID("user2_user_user3");
        sendHelloMessage(user);
      },
      error => {
        console.log("Error getting user:", error);
      }
    );
  };

  const sendHelloMessage = (user) => {
    const messageText = "Hi";
    const receiverID = user.uid;
    const receiverType = CometChat.RECEIVER_TYPE.USER;

    const textMessage = new CometChat.TextMessage(receiverID, messageText, receiverType);

    CometChat.sendMessage(textMessage).then(
      message => {
        console.log("Message sent successfully:", message);
      },
      error => {
        console.log("Message sending failed with error:", error);
      }
    );
  };

  return (
    <div style={{ width: '100%', height: '800px' }}>
      {selectedUserUID && conversationID ? (
        <CometChatUI
          type={CometChat.RECEIVER_TYPE.USER}
        />
      ) : (
        <div>
          <button onClick={openChatWithUser}>Open Chat</button>
        </div>
      )}
    </div>
  );
}

export default App;
