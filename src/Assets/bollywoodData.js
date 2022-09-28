import { useState, useEffect } from "react";
import axios from 'axios';


export const BollywoodData = () => {


const [bollywoodData, setDetails] = useState([]);

useEffect(()=>{
    const getData = async()=>{
        const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/bolly');
        setDetails(data.data);
    }
    getData();
  }, []);
  console.log(bollywoodData);
  return bollywoodData;
}





