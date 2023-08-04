import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (uName, UAge,Ucollege) => {
    setUsersList((...prevUser) => {
      return [...prevUser, { name: uName, age: UAge ,college:Ucollege,id:Math.random().toString()}]
    })

  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />

    </React.Fragment>
  );
}

export default App;
