import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

const Carts = () => {
    const [cartslists, setCarts] = useState();

    useEffect(() => {
        axios.get("https://dummyjson.com/carts")
            .then((respones) => {
                // response always will be object
                setCarts(respones.data.carts)
                console.log(cartslists)
            })
            .catch((error) => {
                console.error();
            })
    }, [])

    if (!cartslists) return null;
    // Ne raboti bidejki nemozis descrturing od lista t.e. ako prajs descturcting mora da e od object
    // const { carts, products, id, title, price } = cartslists;

    return (
        <div >
            {
                cartslists.map((card) => {
                    return (
                        <div key={card.id}>
                            {
                                card.products.map((product) => {
                                    return (<>
                                        <div key={product.id}>
                                            <p><b>Title: </b>{product.title}</p>
                                            <p><b>Price: </b>{product.price}</p>
                                            <Link to={`/cartslink/${product.id}`} className="learn">Learn more...</Link></div>
                                        <br />
                                    </>
                                    )
                                })
                            }
                        </div>
                    )
                })}
        </div>
    )
}

export default Carts