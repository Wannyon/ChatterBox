import {useState} from "react";
import styled from "styled-components";

const CreateRoomForm = ({ onCreateRoom }) => {
    const [roomname, setRoomname] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (roomname.trim()) {
            onCreateRoom(roomname);
            setRoomname('');
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="text"
                value={roomname}
                onChange={(e) => setRoomname(e.target.value)}
                placeholder="새 채팅방 이름을 입력하세요"
            />
            <Button type="submit">Create</Button>
        </Form>
    );
};

const Form = styled.form`
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-size: 13px;
  width: 200px;
  padding: 10px;
  margin-right: 15px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
`;

export default CreateRoomForm;