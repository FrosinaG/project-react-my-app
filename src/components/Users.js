import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
const Users = () => {
  const [userslist, setUsers] = useState();

  useEffect(() => {
   
    axios.get("https://dummyjson.com/users")
      .then((response) => {
        setUsers(response.data)

      })
      .catch((error) => {
        console.error();
      })
  }, [])
  if (!userslist) return null;
  console.log(userslist);
  const { users, id, firstName, lastName, maidenName, age, birthDate, image } = userslist;
  return (
    <div ><h1>Users</h1>
      {users.map((data) => {
        console.log(data);
        return (
          <><div className='users-prof'>
            <div key={data.id} >

              <div className='prof'>
                <div className='prof-text'>
                  <p><b>First Name:</b>{data.firstName}</p>
                  <p><b>Last Name:</b>{data.lastName}</p>
                  <p><b>Maiden Name:</b>{data.maidenName}</p>
                  <p><b>Birth Date:</b> {data.birthDate}</p>
                  <p><b>Age:</b>{data.age}</p>
                </div>
                <div className='prof-img'>  <img src={data.image} className="userimg" />
                </div>
               
              </div>
              <Link to={`/userlink/${data.id}`} className="linkuser">View more about<b> {data.firstName}</b></Link> 
            </div>
          </div>
          </>
        )

      })

      }
    </div>
  )
}

export default Users