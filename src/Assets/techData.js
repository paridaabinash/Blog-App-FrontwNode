import { useState, useEffect } from "react";
import axios from 'axios';

const TechData = () => {

  const [techData, setDetails] = useState([]);

  useEffect(()=>{
      const getData = async()=>{
          const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/tech');
          setDetails(data.data);
      }
      getData();
    }, [])

  return techData;
}

export default TechData;





