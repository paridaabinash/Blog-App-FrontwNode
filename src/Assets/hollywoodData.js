import { useState, useEffect } from "react";
import axios from 'axios';


const HollywoodData = () => {

  const [details, setDetails] = useState([]);

useEffect(()=>{
    const getData = async()=>{
        const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/holly');
        setDetails(data.data);
    }
    getData();
  }, [])

  return details;
}

export default HollywoodData;





