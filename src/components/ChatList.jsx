import React from "react";

const ChatList = ({ messages, RoomClick }) => {
    const rooms = [...new Set(messages.map(message => message.roomname))];
    return (
      <div className="chat-list">
          <h2>Chat Rooms</h2>
          <ul>
              {rooms.map(room => (
                  <li key={room} onClick={() => RoomClick(room)}>
                      {room}
                  </li>
              ))}
          </ul>
      </div>
    );
};

export default ChatList;