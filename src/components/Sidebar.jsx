import styled from "styled-components";
import {useState} from "react";

import FriendList from "./FriendList";
import UserList from "./UserList";

const Sidebar = ({ messages }) => {
    const users = [...new Set(messages.map(msg => msg.username))];

    const [userSearch, setUserSearch] = useState("");
    const [friends, setFriends] = useState([]);

    const handleAddFriend = (friend) => {
        if (!friends.includes(friend)) {
            setFriends([...friends, friend]);
        }
    };

    const handleRemoveFriend = (friend) => {
        setFriends(friends.filter(ex => ex !== friend));
    };

    const filteredUsers = users
        .filter(user => user.toLowerCase().includes(userSearch.toLowerCase()))
        .filter(user => !friends.includes(user)); // 친구 목록에 없는 사용자들만 필터링

    return (
        <Wrapper>
            <SearchBox
                type="text"
                value={userSearch}
                onChange={(e) => setUserSearch(e.target.value)}
                placeholder="사용자 이름을 검색하세요"
            />
            <FriendList friends={friends} onRemoveFriend={handleRemoveFriend} />
            <UserList users={filteredUsers} onAddFriend={handleAddFriend} />
        </Wrapper>
    )
};

export default Sidebar;

const Wrapper = styled.div`
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
