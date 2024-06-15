import React, {useState} from 'react';
import styled from "styled-components";
import MessageForm from './MessageForm';

const ChatRoom = ({ roomname, messages, RefreshMessage }) => {
    const [messageSearch, setMessageSearch] = useState("");

    const filteredMessages = messages.filter(msg =>
        msg.text.toLowerCase().includes(messageSearch.toLowerCase()) ||
        msg.username.toLowerCase().includes(messageSearch.toLowerCase())
    );

    return (
        <ChatRoomContainer className="chat-room">
            <h2>{roomname}</h2>
            <SearchBox
                type="text"
                value={messageSearch}
                onChange={(e) => setMessageSearch(e.target.value)}
                placeholder="Search (User & Message)"
            />

            <MessagesContainer className="messages">
                {filteredMessages.map(msg => (
                    <Message key={msg.id} className="message">
                        <strong>{msg.username}</strong>
                        <p>
                            {msg.text}
                            <span>{new Date(msg.date).toLocaleString()}</span>
                        </p>

                    </Message>
                ))}
            </MessagesContainer>
            <MessageForm roomname={roomname} RefreshMessage={RefreshMessage} />
        </ChatRoomContainer>
    );
};

const ChatRoomContainer = styled.div`
  width: 100%;
  max-width: 600px;
`;

const MessagesContainer = styled.div`
  min-height: 300px;
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 300px;
  margin-bottom: 10px;
  overflow-y: auto;
  background-color: #7eb6b6;
`;

const Message = styled.div`
  margin-bottom: 10px;
  font-size: medium;
  background-color: #eaece9;
  border-radius: 10px;
  padding: 1px 10px;

  strong {
    font-size: large;
    color: #333;
  }

  span {
    font-size: x-small;
  }
`;

const SearchBox = styled.input`
  font-size: 10px;
  margin-bottom: 10px;
  padding: 10px;
`;

export default ChatRoom;