import React from "react";

function Message(props) {
  const { item, userName } = props;

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
    </div>
  );
}

export default Message;
