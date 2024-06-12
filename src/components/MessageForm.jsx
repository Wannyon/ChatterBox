import React, { useState } from "react";
import axios from "axios";

const MessageForm = ({ roomname }) => {
    const [text, setText] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newMessage = {
            username: "Jae Won",
            roomname: roomname,
            text: text,
            date: new Date().toISOString()
        };

        // 서버로 메세지 전송.
        try {
            await axios.post("https://www.yungooso.com/api/messages", newMessage);
            setText("");
        } catch (error) {
            console.error("메세지를 전송하는 중 오류 발생", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="메세지를 입력하세요."
            />
            <button type="submit">SEND</button>
        </form>
    );
};

export default MessageForm;