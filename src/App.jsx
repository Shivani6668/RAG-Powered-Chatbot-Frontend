// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [message, setMessage] = useState('');
//   const [response, setResponse] = useState('');

//   const sendMessage = async () => {
//     try {
//       const res = await axios.get('http://localhost:5000');
//       setResponse(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>News RAG Chatbot Frontend</h1>
//       <button onClick={sendMessage}>Test Backend</button>
//       <p>Response: {response}</p>
//     </div>
//   );
// }

// export default App;


// src/App.jsx
import React from 'react';
import ChatPage from './pages/ChatPage';

function App() {
  return <ChatPage />;
}

export default App;
