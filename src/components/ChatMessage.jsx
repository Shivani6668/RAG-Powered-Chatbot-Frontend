// import React from 'react';

// const ChatMessage = ({ role, message, isTyping }) => {
//   return (
//     <div className={`chat-message ${role}`}>
//       {role === 'bot' && <div className="avatar">🤖</div>}
//       <div className={`message ${isTyping ? 'typing' : ''}`}>
// {isTyping ? (
//   <div className="typing">
//     <span className="dot" />
//     <span className="dot" />
//     <span className="dot" />
//   </div>
// ) : (
//   <div className="message">{message}</div>
// )}

//       </div>
//     </div>
//   );
// };

// export default ChatMessage;



import React from 'react';

const ChatMessage = ({ role, message, isTyping }) => {
  return (
    <div className={`chat-message ${role}`}>
      {role === 'bot' && <div className="avatar">🤖</div>}
      <div className={`message ${isTyping ? 'typing' : ''}`}>
        {isTyping ? (
          <div className="typing-dots">
            <span className="dot" />
            <span className="dot" />
            <span className="dot" />
          </div>
        ) : (
          message
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
