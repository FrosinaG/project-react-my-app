import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Userslink = ({ data }) => {
    let { id } = useParams();
    let location = useLocation();
    const [userlink, setuserlink] = useState();

    console.log(useParams());
    console.log('loacation', location);

    useEffect(() => {
        axios.get(`https://dummyjson.com/users/${id}`)
            .then((data) => setuserlink(data.data));
    }, [])
    if (!userlink) return null;
    const { firstName, lastName, age, email, phone, image, maidenName,birthDate } = userlink;

    return (<><h1>User Profile</h1>
        <div className='usercart'>

            <div className='userproftext'key={id}>

                <p><b>First name :</b>{firstName}</p>
                <p><b>Last Name :</b>{lastName}</p>
                <p><b>Maiden Name:</b>{maidenName}</p>
                <p><b>Birth Date:</b> {birthDate}</p>
                <p><b>age:</b>{age}</p>
                <p><b>Phone:</b>{phone}</p></div>
            <div className='userprofimg'>
                <img src={image} alt="image" className='userprofimg1' /></div>
                {/* <Link to=""><button>Previous User</button></Link> */}
<button>Next User</button>
        </div>
</>
    )
}

export default Userslink