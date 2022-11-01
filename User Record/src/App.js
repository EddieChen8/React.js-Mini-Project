import React, { useState } from "react";
import AddUser from "./component/User/addUser";
import UsersList from "./component/User/UserList";

function App() {
  const [UserList, setUserList] = useState([]);
  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UsersList users={UserList}></UsersList>
    </div>
  );
}

export default App;
