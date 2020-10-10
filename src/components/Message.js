import React from "react";
import firebase from "../library/firebase";

function Message(props) {
  const { item, userName } = props;
  const { Timestamp } = firebase.firestore;
  let currentTime;

  if (!item.timeStamp) currentTime = false;
  else {
    currentTime = new Timestamp(
      item.timeStamp.seconds,
      item.timeStamp.nanoseconds
    ).toDate();
  }

  return (
    <div className={item.userName === userName ? "userMessages" : ""}>
      {item.userName}
      <p
        id={item.key}
        data-is-big={item.message.length > 100 ? true : false}
        data-username={item.userName}
      >
        {item.message}
      </p>
      <div className="timeStamp">
        {currentTime
          ? currentTime.toLocaleTimeString() +
            "  " +
            currentTime.toLocaleDateString()
          : "no date"}
      </div>
    </div>
  );
}

export default Message;
