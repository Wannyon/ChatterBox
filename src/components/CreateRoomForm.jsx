import {useState} from "react";

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={roomname}
                onChange={(e) => setRoomname(e.target.value)}
                placeholder="새 채팅방 이름을 입력하세요"
            />
            <button type="submit">Create</button>
        </form>
    );
};

export default CreateRoomForm;