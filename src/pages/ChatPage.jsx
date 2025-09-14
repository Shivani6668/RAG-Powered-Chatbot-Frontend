import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import ChatMessage from '../components/ChatMessage';
import ChatInput from '../components/ChatInput';
import ChatHeader from '../components/ChatHeader';
import BotInfo from '../components/BotInfo';
import '../styles/chat.scss';

const API_URL = import.meta.env.VITE_API_URL || 'https://rag-powered-chatbot-backend.onrender.com/chat';

const ChatPage = () => {
  const [sessionId, setSessionId] = useState('');
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('chatSessionId');
    const id = saved || uuidv4();
    setSessionId(id);
    localStorage.setItem('chatSessionId', id);
    fetchHistory(id);
  }, []);

  const fetchHistory = async (id) => {
    try {
      const res = await axios.get(`${API_URL}/${id}`);
      setChat(res.data.history || []);
    } catch (err) {
      console.error(err);
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
        <ChatHeader title="Robbie" />
        <div className="chat-window">
          {chat.map((msg, i) => (
            <ChatMessage key={i} role={msg.role} message={msg.message} />
          ))}
          {loading && <ChatMessage role="bot" isTyping />}
        </div>
        <ChatInput onSend={sendMessage} />
        <button className="reset-btn" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default ChatPage;
