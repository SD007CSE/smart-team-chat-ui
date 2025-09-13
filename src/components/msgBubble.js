import React from 'react'

export default function MsgBubble({msg}) {
  const isOwn = msg.sender === "You";
  
  return (
    <div className={`message-bubble ${isOwn ? 'own-message' : 'other-message'}`}>
      <div className="message-content">
        <div className="message-text">{msg.message}</div>
        <div className="message-time">{msg.time}</div>
      </div>
    </div>
  )
}
