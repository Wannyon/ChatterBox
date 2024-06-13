import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import ChatList from "./components/ChatList.jsx";
import ChatRoom from "./components/ChatRoom.jsx";
import CreateRoomForm from "./components/CreateRoomForm.jsx";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();

  const getMessages = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      setMessages(response.data);
      const uniqueRooms = [...new Set(response.data.map(msg => msg.roomname))];
      setRooms(uniqueRooms);
    } catch (error) {
      console.error('메시지를 가져오는 중 오류 발생:', error);
    }
  };

  // 컴포넌트가 마운트 될 때, 서버에서 메세지 가져옴.
  useEffect(() => {
    getMessages();
    const interval = setInterval(getMessages, 5000);
    return () => clearInterval(interval); // 언마운트될 때 인터벌 클리어.
  }, []);

  const handleRoomClick = (roomname) => {
    setSelectedRoom(roomname);
  };

  const handleCreateRoom = (newRoom) => {
    if (!rooms.includes(newRoom)) {
      setRooms([...rooms, newRoom]);
    }
    setSelectedRoom(newRoom);
  };

  const returnClick = () => {
    setSelectedRoom(null);
  };

  return (
      <AppContainer className="app">
        <button className="return-btn" onClick={returnClick}>return</button>
        {!selectedRoom && <CreateRoomForm onCreateRoom={handleCreateRoom}/>}
        {!selectedRoom && <ChatList rooms={rooms} RoomClick={handleRoomClick}/>}
        {selectedRoom &&
            <ChatRoom
                roomname={selectedRoom}
                messages={messages.filter(msg => msg.roomname === selectedRoom)}
                RefreshMessage={getMessages}
            />
        }
      </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export default App;
