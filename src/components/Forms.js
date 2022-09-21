import axios from 'axios';
import React, { useState } from 'react';

const Forms = () => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");

    
    const onSubmit = (e) =>{
        e.preventDefault()
        console.log("e.preventDefault");
        axios.post('https://dummyjson.com/users/add', {
            FirstName,
            LastName,
        })   
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return (
        <>
            <div className='form-add'>
                <form onSubmit={onSubmit}>
                    <label id="FirstName">First Name</label>
                    <input type="text" name="FirstName" id="FirstName" value={FirstName} onChange={(e) => setFirstName(e.target.value)} />
                    <label id="LastName">Last Name</label>
                    <input type="text" name="lastname" id="lastName" value={LastName} onChange={(e) => setLastName(e.target.value)} />
                    <button type='submit'>Add user</button>

                </form>
                <p>{FirstName}</p>
                <p>{LastName}</p>
            </div>
        </>

    )
    }

    export default Forms