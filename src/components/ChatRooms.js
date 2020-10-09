import React, { useState, useContext, useEffect } from "react";
import { firebaseDB } from "../library/firebase";
import { ChatContext } from "./Chat";
import Chatroom from "./Chatroom";
const chatRoomsRef = firebaseDB.ref("chat-rooms");

function ChatRooms() {
  const [roomName, setRoomName] = useState("");
  const [chatRooms, setChatRooms] = useState([]);
  const { setRoom, setMenuClicked } = useContext(ChatContext);

  useEffect(() => {
    let isMounted = true;

    chatRoomsRef.on("value", (snap) => {
      const data = snap.val();
      if (!data) {
        if (isMounted) setChatRooms([]);
        return;
      }
      const keys = Object.keys(data);
      if (isMounted) setChatRooms(keys);
    });

    return () => {
      isMounted = false;
    };
  }, []);

  const handleChange = (e) => {
    setRoomName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!!!roomName) return;

    setRoom(roomName);
    setMenuClicked(false);
    setRoomName("");
  };

  return (
    <div className="chatRoomsContainer">
      <a
        href="https://devbrm.github.io/portfolio/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Visit Developer's site
      </a>
      <h1>Select any Chat room</h1>
      <div className="chatRooms">
        {chatRooms.map((room) => (
          <Chatroom key={room} room={room} />
        ))}
      </div>
      <div>or</div>
      <form>
        <input
          placeholder="Room Name"
          type="text"
          onChange={handleChange}
          value={roomName}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Create Room
        </button>
      </form>
    </div>
  );
}

export default ChatRooms;
