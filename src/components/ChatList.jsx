import React from "react";
import styled from "styled-components";

const ChatList = ({ rooms, RoomClick }) => {
    return (
      <ChatListContainer className="chat-list">
          <ChatListHeader>Chat Rooms</ChatListHeader>
          <ChatListItems>
              {rooms.map(room => (
                  <ChatListItem key={room} onClick={() => RoomClick(room)}>
                      {room}
                  </ChatListItem>
              ))}
          </ChatListItems>
      </ChatListContainer>
    );
};

const ChatListContainer = styled.div`
  margin-bottom: 20px;
`;

const ChatListHeader = styled.h2`
  margin-bottom: 10px;
`;

const ChatListItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ChatListItem = styled.li`
  padding: 10px;
  margin: 5px 0px;
  cursor: pointer;
  background-color: #f1f1f1;
  
  &:hover {
    background-color: #ddd;
  }
`;

export default ChatList;