import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios'
import data from 'data';
import Products from './Products';
import useGetProducts from '../hooks/useGetProducts';

const Productlink = ({ products }) => {
    let { id } = useParams();
    let location = useLocation();



    const [productlink, setProductlink] = useState();
    console.log(useParams());
    console.log('location', location);
    const apicall = () => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((data) => {
                setProductlink(data.data)
                console.log(data)

            })
    };

    useEffect(() => {
        apicall()
    }, [])
    if (!productlink) return null;


    return (
        <div className='prod-cont'>
            <><div className='produc-text'>
                <h1>Title: {productlink.title}</h1>
                <h2>Description:{productlink.description}</h2>
                <p className='prices'><b>Prices: {productlink.price} €</b> </p></div>
                {
                    productlink.images.map((image, index) => {

                        return (<>
                        <div className='img3'>
                            <img src={image} key={index} alt="products" className="productsimg" />
                        </div>
                        </>
                        )
                    })
                }
            </>
        </div>

    )
}

export default Productlink