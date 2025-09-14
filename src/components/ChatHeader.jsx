import React from 'react';
const ChatHeader = ({ title = "Robbie" }) => (
  <div className="chat-header">
    <h3>{title}</h3>
  </div>
);

export default ChatHeader;
