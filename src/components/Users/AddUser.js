import React, { useState } from "react";

import Card from '../UI/Card'

import classes from './AddUser.module.css'

import Button from "../UI/Button";


const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [enteredCollege, setCollege] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        props.onAddUser(enteredUsername, enteredAge, enteredCollege)

        setEnteredAge('');

        setEnteredUsername('');

        setCollege('');
    }
    const collegeHandler = (event) => {
        setCollege(event.target.value);
    }

    const usernameHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageHandler = (event) => {
        setEnteredAge(event.target.value);
    }
    return (
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username" type="text"
                    value={enteredUsername}
                    onChange={usernameHandler} />
                <label htmlFor="age">Age</label>
                <input
                    id="age" type="number"
                    value={enteredAge}
                    onChange={ageHandler} />
                <label htmlFor="College_Name">College Name</label>
                <input
                    id="college" type="text"
                    value={enteredCollege}
                    onChange={collegeHandler} />
                <Button type="submit">Add user</Button>
            </form>
        </Card>
    )
}

export default AddUser;