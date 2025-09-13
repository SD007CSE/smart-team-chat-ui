import React, { useState } from 'react'
import Button from './CommonButton/Button';

export default function NewChat({onBack, onAdd}) {
  const [userName, setUserName] = useState("");
  const [iceBreaker, setIceBreaker] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateIceBreaker = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setIceBreaker("Hi! Hope you're having a wonderful day. How can I help you today?");
      setIsGenerating(false);
    }, 1000);
  }

  const handleStartChat = () => {
    if (userName.trim()) {
      onAdd(userName.trim());
    }
  }

  return (
    <div className="new-chat-container">
      <div className="new-chat-header">
        <Button 
          onClick={onBack} 
          variant="ghost" 
          size="small"
          className="back-button"
        >
          ← Back
        </Button>
        <h2 className="new-chat-title">✨ Start New Chat</h2>
      </div>

      <div className="new-chat-content">
        <div className="form-group">
          <label htmlFor="userName" className="form-label">
            Who would you like to chat with?
          </label>
          <input 
            id="userName"
            type="text"
            className="form-input"
            placeholder="Enter participant name..."
            value={userName}
            onChange={e => setUserName(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === 'Enter' && userName.trim()) {
                handleStartChat();
              }
            }}
          />
        </div>

        <div className="ice-breaker-section">
          <Button 
            onClick={handleGenerateIceBreaker}
            variant="secondary"
            disabled={isGenerating}
            className="ice-breaker-button"
          >
            {isGenerating ? "🔄 Generating..." : "💡 Generate Ice Breaker"}
          </Button>
          
          {iceBreaker && (
            <div className="ice-breaker-card">
              <h4>Suggested Message</h4>
              <p>{iceBreaker}</p>
            </div>
          )}
        </div>

        <div className="action-buttons">
          <Button 
            onClick={handleStartChat}
            disabled={!userName.trim()}
            className="start-chat-button"
            size="large"
          >
            🚀 Start Chat
          </Button>
        </div>
      </div>
    </div>
  )
}
