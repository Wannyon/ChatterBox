import {useEffect, useState} from "react";
import axios from "axios";
import ChatList from "./components/ChatList.jsx";
import ChatRoom from "./components/ChatRoom.jsx";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();

  // 컴포넌트가 마운트 될 때, 서버에서 메세지 가져옴.
  useEffect(() => {
    const getMessages = async () => {
      try {
        const response = await axios.get("https://www.yungooso.com/api/messages");
        setMessages(response.data);
      } catch (error) {
        console.error('메시지를 가져오는 중 오류 발생:', error);
      }
    };

    getMessages();
  }, []);

  const handleRoomClick = (roomname) => {
    setSelectedRoom(roomname);
  };

  const returnClick = () => {
    setSelectedRoom(null);
  };

  return (
      <div className="app">
        <button className="return-btn" onClick={returnClick}>return</button>
        {!selectedRoom && <ChatList messages={messages} RoomClick={handleRoomClick}></ChatList>}
        {selectedRoom && <ChatRoom messages={messages.filter(msg => msg.roomname === selectedRoom)}/>}
      </div>
  );
}

export default App;
