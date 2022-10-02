import React, { useEffect, useState } from "react";
import axios from "axios";
import data from "data";
import { Link } from "react-router-dom";
import useGetProducts from '../hooks/useGetProducts';

const Products = () => {
  const [productlist, setProduct] = useState();

  useEffect(() => {
   
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProduct(response.data.products);
     
      })
      .catch((error) => {
        console.error();
      });
  }, []);

  if (!productlist) return null;
 
  return (
<>
      {productlist.map((product) => {
        return (
          <>
            <div className="cont1">
              <div key={product.id}>
                <h3>{product.title}</h3>
                <img src={product.thumbnail} className="img-th" />
                <p>{product.description}</p>
                <p className="prices">Prices: {product.price}€ </p>
              </div>
              <Link to={`/productlink/${product.id}`}>View more </Link>
            </div>
          </>
        );
      })}
      ;
   </>
  );
};

export default Products;
