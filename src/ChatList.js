import React from 'react'
import ChatItem from './components/ChatItem'

export default function ChatList({chats, onSelectChat}) {
  return (
    <div className="chat-list-container">
      <div className="chat-list-header">
        <h2 className="chat-list-title">Your Conversations</h2>
        <div className="chat-count">{chats.length} chats</div>
      </div>
      
      <div className="chat-list">
        {chats.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">💭</div>
            <h3>No conversations yet</h3>
            <p>Start a new chat to begin messaging</p>
          </div>
        ) : (
          chats.map((chat) => (
            <ChatItem 
              key={chat.id} 
              chat={chat} 
              onSelectChat={onSelectChat}
            />
          ))
        )}
      </div>
    </div>
  )
}
