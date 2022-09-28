import React, {useState, useEffect} from 'react';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';
import axios from 'axios';

const Hollywood = () => {

  const [hollywoodData, setDetails] = useState([]);

  useEffect(()=>{
      const getData = async()=>{
          const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/holly');
          setDetails(data.data);
      }
      getData();
    }, [])
  

  dateConvert(hollywoodData);


  return (

    <>
      <Allcard heading='Hollywood' page={hollywoodData} />
    </>
  )
}

export default Hollywood;