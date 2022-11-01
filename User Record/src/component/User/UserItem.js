import "./UserItem.css";

import React from "react";

const UserItem = (props) => {
  return <li className="goal-item">{props.children}</li>;
};

export default UserItem;
