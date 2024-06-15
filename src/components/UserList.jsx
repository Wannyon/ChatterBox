import React from "react";
import styled from "styled-components";

const UserList = ({ users, onAddFriend }) => {
    return (
        <UserListContainer>
            <UserListHeader>사용자 목록</UserListHeader>
            <UserListItems>
                {users.map(user => (
                    <UserListItem key={user}>
                        {user}
                        <AddButton onClick={() => onAddFriend(user)}>+</AddButton>
                    </UserListItem>
                ))}
            </UserListItems>
        </UserListContainer>
    );
};

const UserListContainer = styled.div`
  margin-bottom: 20px;
`;

const UserListHeader = styled.h2`
  margin-bottom: 10px;
`;

const UserListItems = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const UserListItem = styled.li`
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

const AddButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export default UserList;