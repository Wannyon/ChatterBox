import React from 'react';
import styled from 'styled-components';

const FriendList = ({ friends, onRemoveFriend }) => {
    return (
        <FriendListContainer>
            <FriendListHeader>친구 목록</FriendListHeader>
            <FriendListItems>
                {friends.map(friend => (
                    <FriendListItem key={friend}>
                        {friend}
                        <RemoveButton onClick={() => onRemoveFriend(friend)}>-</RemoveButton>
                    </FriendListItem>
                ))}
            </FriendListItems>
        </FriendListContainer>
    );
};

const FriendListContainer = styled.div`
  margin-bottom: 20px;
`;

const FriendListHeader = styled.h2`
  margin-bottom: 10px;
`;

const FriendListItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const FriendListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 5px 0;
  cursor: pointer;
  background-color: #f1f1f1;

  &:hover {
    background-color: #ddd;
  }
`;

const RemoveButton = styled.button`
  background-color: #f44336; /* Red */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;

export default FriendList;