import React from 'react'

export default function ChatItem({chat, onSelectChat}) {
  const getInitials = (name) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  }

  return (
    <div 
      className="chat-item"
      onClick={() => onSelectChat(chat.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelectChat(chat.id);
        }
      }}
    >
      <div className="chat-avatar">
        <span className="avatar-text">{getInitials(chat.name)}</span>
      </div>
      
      <div className="chat-content">
        <div className="chat-header">
          <h3 className="chat-name">{chat.name}</h3>
          <span className="chat-time">{chat.time}</span>
        </div>
        <p className="chat-preview">
          {chat.lastMessage || "No messages yet"}
        </p>
      </div>
      
      <div className="chat-indicator">
        <div className="unread-dot"></div>
      </div>
    </div>
  )
}
