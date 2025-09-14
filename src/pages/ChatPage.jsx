import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import ChatHeader from '../components/ChatHeader';
import BotInfo from '../components/BotInfo';
import { Circles } from 'react-loader-spinner'; // 💫 import spinner

import '../styles/chat.scss';

const API_URL = import.meta.env.VITE_API_URL || 'https://rag-powered-chatbot-backend.onrender.com/chat';

const ChatPage = () => {
  const chatWindowRef = useRef(null);
const [historyLoading, setHistoryLoading] = useState(true);

  const [sessionId, setSessionId] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  // Initialize session
  useEffect(() => {
    const saved = localStorage.getItem('chatSessionId');
    const id = saved || uuidv4();
    setSessionId(id);
    localStorage.setItem('chatSessionId', id);
    fetchHistory(id);
  }, []);


useEffect(() => {
  const timeout = setTimeout(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, 50); // slight delay to allow DOM updates

  return () => clearTimeout(timeout);
}, [chat, loading]);


  const fetchHistory = async (id) => {
    try {
          setHistoryLoading(true);

      const res = await axios.get(`${API_URL}/${id}`);
      setChat(res.data.history || []);
    } catch (err) {
      console.error(err);
    } finally {
    setHistoryLoading(false);
  }
  };

  const sendMessage = async (message) => {
    const newChat = [...chat, { role: 'user', message }];
    setChat(newChat);
    setLoading(true);
    try {
      const res = await axios.post(API_URL, { sessionId, message });
      setChat([...newChat, { role: 'bot', message: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setChat([...newChat, { role: 'bot', message: 'Something went wrong 😢' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = async () => {
    await axios.delete(`${API_URL}/${sessionId}/clear`);
    setChat([]);
  };

  return (
    <div className="chat-layout">
      <BotInfo />

      <div className="chat-panel">
        <ChatHeader title="NewsNexus" />
        
        <div className="chat-window" ref={chatWindowRef}>
  {historyLoading ? (
 <Circles
    height="60"
    width="60"
    color="#5f6fff"
    ariaLabel="loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
  />) : (
    <>
      {chat.map((msg, i) => (
        <ChatMessage key={i} role={msg.role} message={msg.message} />
      ))}
      {loading && <ChatMessage role="bot" isTyping />}
    </>
  )}
</div>

        <ChatInput onSend={sendMessage} />
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ChatPage;
