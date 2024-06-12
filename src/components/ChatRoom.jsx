import React from 'react';
import MessageForm from './MessageForm';

const ChatRoom = ({ messages }) => {
    return (
        <div className="chat-room">
            <h2>{messages[0]?.roomname}</h2>
            <MessageForm roomname={messages[0]?.roomname} />

            <div className="messages">
                {messages.map(msg => (
                    <div key={msg.id} className="message">
                        <p><strong>{msg.username}</strong>: {msg.text}</p>
                        <span>{new Date(msg.date).toLocaleString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ChatRoom;