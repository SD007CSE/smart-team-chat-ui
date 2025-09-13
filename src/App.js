import './App.css';
import { useState } from 'react';
import ChatList from './ChatList';
import ChatWindow from './components/ChatWindow';
import NewChat from './components/NewChat';
import Button from './components/CommonButton/Button';
import { chatList, messages } from './data/dummyData';

function App() {
  const [screen, setScreen] = useState("list");
  const [selectedChat, setSelectedChat] = useState(null);
  const [chats, setChats] = useState(chatList);

  const openWindowChat = (chatId) => {
    setSelectedChat(chats.find(c => c.id == chatId));
    setScreen("chat")
  }

  const addNewChat = (userName) => {
    const newChat = { id: chats.length + 1, name: userName, lastMessage: "", time: "" }
    setChats([...chats, newChat]);
    setSelectedChat(newChat);
    setScreen("chat");
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1 className="app-title">Smart Team Chat UI</h1>
      </div>
      
      <div className="app-content">
        {screen === "list" && (
          <div className="screen-container">
            <ChatList chats={chats} onSelectChat={openWindowChat} />
            <Button 
              onClick={() => setScreen("new")} 
              className="new-chat-button"
            >
              ✨ New Chat
            </Button>
          </div>
        )}
        
        {screen === "chat" && selectedChat && (
          <ChatWindow 
            chat={selectedChat} 
            messages={messages} 
            onBack={() => setScreen("list")} 
          />
        )}
        
        {screen === "new" && (
          <NewChat 
            onBack={() => setScreen("list")} 
            onAdd={addNewChat} 
          />
        )}
      </div>
    </div>
  )
}

export default App;
