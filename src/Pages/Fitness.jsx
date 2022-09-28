import React, {useState, useEffect} from 'react';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';
import axios from 'axios';

const Fitness = () => {

  const [fitnessData, setDetails] = useState([]);

  useEffect(()=>{
    const getData = async()=>{
        const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/fitness');
        setDetails(data.data);
    }
    getData();
  }, [])

  dateConvert(fitnessData);


  return (

    <>
      <Allcard heading='Fitness' page={fitnessData} />
    </>
  )
}

export default Fitness;