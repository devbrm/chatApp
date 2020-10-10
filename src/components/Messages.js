import React, { useEffect, useState, useContext, useRef } from "react";
import firebase, { firebaseDB } from "../library/firebase";
import { AppContext } from "../App";
import Message from "./Message";
import validInput from "../library/validInput";

function Messages(props) {
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const { userName } = useContext(AppContext);
  const { room } = props;
  const { Timestamp } = firebase.firestore;
  const messagesRef = useRef(null);
  const roomRef = firebaseDB.ref("chat-rooms/" + room);

  useEffect(() => {
    let isMounted = true;

    roomRef.on("value", (snap) => {
      const data = snap.val();
      if (!data) {
        if (isMounted) setData([]);
        return;
      }

      const keys = Object.keys(data);

      if (isMounted)
        setData(
          keys.map((key) => {
            return {
              key,
              ...data[key],
            };
          })
        );
    });

    return () => {
      isMounted = false;
    };
  }, [room]);

  useEffect(() => {
    if (messagesRef.current.lastChild)
      messagesRef.current.lastChild.scrollIntoView();
  }, [data]);

  const handleChange = (e) => {
    const { value } = e.target;
    setMessage(value);
  };

  const handleKeyDown = (e) => {
    if (e.key !== "Enter" || !validInput(message) || !message.length) return;

    e.preventDefault();
    roomRef.push({
      message: message.trim(),
      userName,
      timeStamp:
        Timestamp.now().toDate().toLocaleTimeString() +
        "  " +
        Timestamp.now().toDate().toLocaleDateString(),
    });
    setMessage("");
  };

  const handleNewMessage = (e) => {
    e.preventDefault();

    if (!validInput(message) || !message.length) return;

    roomRef.push({
      message: message.trim(),
      userName,
    });
    setMessage("");
  };

  return (
    <div className="messagesContainer">
      <div ref={messagesRef} className="messages">
        {data.map((item) => (
          <Message item={item} userName={userName} key={item["key"]} />
        ))}
      </div>
      <form>
        <input
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="text"
          value={message}
          placeholder="Aa"
        ></input>
        <button onClick={handleNewMessage}>
          <i className="fas fa-2x fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
}

export default Messages;
