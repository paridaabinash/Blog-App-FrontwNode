import React, {useState, useEffect} from 'react';
import Allcard from '../Components/Allcard';
import axios from 'axios';
import { dateConvert } from '../Components/Dateconvert';


const Bollywood = () => {

  const [bollywoodData, setDetails] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
        const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/bolly');
        setDetails(data.data);
    }
    getData();
  }, []);

  dateConvert(bollywoodData);

  return (

    <>
      
        <Allcard heading='Bollywood' page={bollywoodData} />

        
    </>
  )
}

export default Bollywood;