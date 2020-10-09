import React, { useContext } from "react";
import { ChatContext } from "./Chat";

function Chatroom(props) {
  const { room } = props;
  const { setRoom, setMenuClicked } = useContext(ChatContext);

  const handleClick = (e) => {
    const { name } = e.target;
    setRoom(name);
    setMenuClicked(false);
  };

  return (
    <button name={room} onClick={handleClick}>
      {room}
    </button>
  );
}

export default Chatroom;
