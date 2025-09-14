
# 🧠 RAG-Powered News Chatbot — Frontend

This is the **frontend** of a full-stack RAG-powered chatbot built for answering queries based on real-time news articles. Built using **React** and **SCSS**, the chatbot interacts with a Node.js backend, Redis for session management, Qdrant for vector similarity search, and Gemini LLM for generating final responses.

> ✅ Assignment Submission for Full Stack Developer Role @ Voosh

---

## 📸 Demo

> 🎥 [Watch Demo Video](https://your-demo-video-link.com)  
> 🌐 [Live Frontend](https://rag-powered-chatbot-frontend.vercel.app/)

---

## ✨ Features

- 📥 Chat interface with message history
- 💬 Streamed or typed-out bot responses
- 🧠 RAG pipeline integration via backend API
- ♻️ Session handling with automatic history restoration
- 🔄 Reset button to clear session/chat history
- 📱 Responsive and mobile-friendly design

---

## ⚙️ Tech Stack

| Tech            | Purpose                            |
|-----------------|------------------------------------|
| **React.js**    | SPA frontend                       |
| **SCSS**        | Styling and component-level CSS    |
| **Axios**       | API calls to backend               |
| **UUID**        | Generate session ID per user       |
| **Render**      | Deployment                         |

---

## 🚀 Getting Started (Local Development)

### 1. Clone the Repo

```bash
git clone https://github.com/YourUsername/rag-news-chatbot-frontend.git
cd rag-news-chatbot-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file and add your backend API URL:

```
VITE_API_URL=https://rag-powered-chatbot-backend.onrender.com/chat
```

> ✅ Add your deployed or local backend URL here.

### 4. Run the App

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 🧠 How It Works (Frontend Flow)

1. On page load:
   - Generates a new session ID using `uuid`
   - Checks Redis for existing history via backend API
2. On message send:
   - Sends the user query to the backend `/ask` endpoint
   - Backend returns Gemini response using top-k vectors from Qdrant
3. On reset:
   - Calls `/reset-session` API to clear Redis session data

---

## 🧪 API Endpoints Used

> These APIs are defined in the backend repo.

| Endpoint           | Description                          |
|--------------------|--------------------------------------|
| `POST /`        | Submit query and get chatbot reply   |
| `GET /:sessionId`     | Fetch current session chat history   |
| `DELETE /:sessionId/clear`      | Clear session and start fresh        |

---

## 📁 Project Structure

```
📦 src
├── components
│   ├── BotInfo.jsx
│   ├── ChatHeader.jsx
│   └── ChatInput.jsx
│   └── ChatMessage.jsx
├── styles
│   └── botinfo.scss
│   └── chat.scss
├── pagess
│   └── ChatPage.jsx
├── App.jsx
├── main.jsx
└── index.html
```

---

## 📷 Screenshots

| Chat UI                        | Reset Session                |
|-------------------------------|------------------------------|
| ![Chat UI](chat.png) | ![Reset](clear.png) |

> (Add screenshots to `/public/screenshots` folder and update paths.)

---

## 📦 Deployment

Deployed via [Render](https://render.com/)

- 🌐 Live: [https://rag-powered-chatbot-frontend.vercel.app/](https://rag-powered-chatbot-frontend.vercel.app/)

---

## 🔗 Related Repositories

- 🔙 [Backend Repo](https://github.com/YourUsername/rag-news-chatbot-backend)

---

## 🧑‍💻 Author

**Shivani**  
[GitHub](https://github.com/Shivani6668/RAG-Powered-Chatbot-Backend.git) | [LinkedIn](https://www.linkedin.com/in/shivani6668/)

---

## 📄 License

This project is licensed under the MIT License.

---

## 💬 Feedback

Open an issue or reach out if you have suggestions or feedback!
