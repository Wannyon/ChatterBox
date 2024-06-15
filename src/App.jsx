import {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import ChatList from "./components/ChatList.jsx";
import ChatRoom from "./components/ChatRoom.jsx";
import CreateRoomForm from "./components/CreateRoomForm.jsx";
import UserList from "./components/UserList.jsx";
import FriendList from "./components/FriendList.jsx";

const App = () => {
  const [messages, setMessages] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState();
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  const [roomSearch, setRoomSearch] = useState("");
  const [userSearch, setUserSearch] = useState("");

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

  const getUsers = async () => {
    try {
      const response = await axios.get("https://www.yungooso.com/api/messages");
      const uniqueUsers = [...new Set(response.data.map(msg => msg.username))];
      setUsers(uniqueUsers);
    } catch (error) {
      console.error('사용자 목록을 가져오는 중 오류 발생:', error);
    }
  };

  // 컴포넌트가 마운트 될 때, 서버에서 메세지 가져옴.
  useEffect(() => {
    getMessages();
    getUsers();
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

  const handleAddFriend = (friend) => {
    if (!friends.includes(friend)) {
      setFriends([...friends, friend]);
    }
  };

  const handleRemoveFriend = (friend) => {
    setFriends(friends.filter(ex => ex !== friend));
  };

  const returnClick = () => {
    setSelectedRoom(null);
  };

  const filteredRooms = rooms.filter(room =>
      room.toLowerCase().includes(roomSearch.toLowerCase())
  );

  const filteredUsers = users
      .filter(user => user.toLowerCase().includes(userSearch.toLowerCase()))
      .filter(user => !friends.includes(user)); // 친구 목록에 없는 사용자들만 필터링


  return (
      <AppContainer className="app">
        <MainContent className="main-content">
          <button className="return-btn" onClick={returnClick}>return</button>
          {!selectedRoom && <CreateRoomForm onCreateRoom={handleCreateRoom}/>}
          {!selectedRoom &&
              <SearchBox
                  type="text"
                  value={roomSearch}
                  onChange={(e) => setRoomSearch(e.target.value)}
                  placeholder="Search (ChatRoom)"
              />
          }
          {!selectedRoom && <ChatList rooms={filteredRooms} RoomClick={handleRoomClick}/>}
          {selectedRoom &&
              <ChatRoom
                  roomname={selectedRoom}
                  messages={messages.filter(msg => msg.roomname === selectedRoom)}
                  RefreshMessage={getMessages}
              />
          }
        </MainContent>
        <Sidebar className="sidebar">
          <SearchBox
              type="text"
              value={userSearch}
              onChange={(e) => setUserSearch(e.target.value)}
              placeholder="사용자 이름을 검색하세요"
          />
          <FriendList friends={friends} onRemoveFriend={handleRemoveFriend} />
          <UserList users={filteredUsers} onAddFriend={handleAddFriend} />
        </Sidebar>
      </AppContainer>
  );
};

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px;
`;

const MainContent = styled.div`
  flex-grow: 1;
  max-width: 100%;
  min-width: 400px;
  width: 400px;
  margin: 0 100px;
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  padding: 20px;
  border-left: 1px solid #ccc;
`;

const SearchBox = styled.input`
  font-size: 16px;
  margin-bottom: 20px;
  padding: 10px;
`;

export default App;
