import React from 'react';
import MessageForm from './MessageForm';

const ChatRoom = ({ roomname, messages, RefreshMessage }) => {
    return (
        <div className="chat-room">
            <h2>{roomname}</h2>
            <MessageForm roomname={roomname} RefreshMessage={RefreshMessage} />

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