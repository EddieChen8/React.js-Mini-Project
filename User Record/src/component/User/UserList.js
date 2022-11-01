import classes from "./UserList.module.css";
import UserItem from "./UserItem";
import React from "react";
import Card from "../UI/Card";

const UsersList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <UserItem key={user.id}>
            {user.name} ({user.age} years old)
          </UserItem>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
