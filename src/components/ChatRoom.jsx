import React from 'react';
import styled from "styled-components";
import MessageForm from './MessageForm';

const ChatRoom = ({ roomname, messages, RefreshMessage }) => {
    return (
        <ChatRoomContainer className="chat-room">
            <h2>{roomname}</h2>
            <MessageForm roomname={roomname} RefreshMessage={RefreshMessage} />

            <MessagesContainer className="messages">
                {messages.map(msg => (
                    <Message key={msg.id} className="message">
                        <p>
                            <strong>{msg.username}</strong>: {msg.text}
                            <span>{new Date(msg.date).toLocaleString()}</span>
                        </p>

                    </Message>
                ))}
            </MessagesContainer>
        </ChatRoomContainer>
    );
};

const ChatRoomContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const MessagesContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 300px;
  margin-bottom: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  margin-bottom: 10px;
  font-size: medium;
  
  strong {
    font-size: large;
    color: #333;
  }
  
  span {
    font-size: x-small;
  }
`;

export default ChatRoom;