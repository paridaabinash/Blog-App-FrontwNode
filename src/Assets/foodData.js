import { useState, useEffect } from "react";
import axios from 'axios';


const FoodData = () => {

  const [details, setDetails] = useState([]);

useEffect(()=>{
    const getData = async()=>{
        const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/food');
        setDetails(data.data);
    }
    getData();
  }, [])

  return details;
}

export default FoodData;


