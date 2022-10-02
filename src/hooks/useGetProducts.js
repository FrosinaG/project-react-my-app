import { useEffect, useState } from "react";
import axios from "axios";


const useGetProducts = (url) => {
  const [temp, setTemp] = useState();

  useEffect(() => {

    axios.get(url)
        .then((data) => {
          setTemp(data.data)
            console.log(data)
        })

  }, [])
  
  
  return { temp }
}

export default useGetProducts