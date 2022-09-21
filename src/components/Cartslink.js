import axios from 'axios';
import data from 'data';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'

const Cartslink = () => {
    let { id } = useParams;
    let location = useLocation;
    const [Cartslist, Setcartlist] = useState();

    console.log(useParams());
    console.log('loacation', location);
    useEffect(() => {
        axios.get(`https://dummyjson.com/carts/${id}`)
            .then((data) => Setcartlist(data.data));

    }, [])
    if (!Cartslist) return null;
    const { carts, products, title, price } = Cartslist;
    return (
        <div>
            < div key={id}>
                <p><b>Title: </b>{title}</p>
                <p><b>Price: </b>{price}</p></div>

        </div>
    )
}

export default Cartslink