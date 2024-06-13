import React, { useState } from "react";
import axios from "axios";

const MessageForm = ({ roomname, RefreshMessage }) => {
    const [text, setText] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username) {
            alert('UserName을 입력하세요');
            return;
        } else if (!text) {
            alert('Message를 입력하세요');
            return;
        }

        const newMessage = {
            username: username,
            roomname: roomname,
            text: text,
            date: new Date().toISOString()
        };

        // 서버로 메세지 전송.
        try {
            await axios.post("https://www.yungooso.com/api/messages", newMessage);
            setText("");
            RefreshMessage();   // 메세지 전송 후 메세지 리스트 갱신.
        } catch (error) {
            console.error("메세지를 전송하는 중 오류 발생", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="USERNAME"
            />

            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="MESSAGE"
            />
            <button type="submit">SEND</button>
        </form>
    );
};

export default MessageForm;