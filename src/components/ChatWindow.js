import React, { useState, useRef, useEffect } from 'react'
import Button from './CommonButton/Button';
import MsgBubble from './msgBubble';

export default function ChatWindow({chat, messages, onBack}) {
  const [summary, setSummary] = useState("");
  const [reply, setReply] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // In a real app, this would send the message
      console.log('Sending message:', newMessage);
      setNewMessage("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <div className="chat-window">
      <div className="chat-header">
        <Button 
          onClick={onBack} 
          variant="ghost" 
          size="small"
          className="back-button"
        >
          ← Back
        </Button>
        <div className="chat-info">
          <div className="chat-avatar-small">
            <span>{chat.name.charAt(0).toUpperCase()}</span>
          </div>
          <div>
            <h2 className="chat-title">{chat.name}</h2>
            <div className="chat-status">Online</div>
          </div>
        </div>
      </div>

      <div className="messages-container">
        <div className="messages-list">
          {messages.map((msg, i) => (
            <MsgBubble key={i} msg={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="message-input-container">
        <div className="input-wrapper">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="message-input"
          />
          <Button 
            onClick={handleSendMessage}
            className="send-button"
            disabled={!newMessage.trim()}
          >
            Send
          </Button>
        </div>
      </div>

      <div className="chat-actions">
        <Button 
          onClick={() => setSummary("Casual chat about meeting tomorrow.")}
          variant="secondary"
          size="small"
        >
          📝 Summarize Thread
        </Button>
        <Button 
          onClick={() => setReply("Sounds good! See you then!")}
          variant="secondary"
          size="small"
        >
          💡 Smart Reply
        </Button>
      </div>

      {summary && (
        <div className="summary-card">
          <h4>📋 Summary</h4>
          <p>{summary}</p>
        </div>
      )}
      
      {reply && (
        <div className="reply-card">
          <h4>💡 Suggested Reply</h4>
          <p>{reply}</p>
        </div>
      )}
    </div>
  )
}
