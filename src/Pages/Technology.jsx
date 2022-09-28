import React, {useState, useEffect} from 'react';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';
import axios from 'axios';


const Technology = () => {

  const [techData, setTechData] = useState([]);

  useEffect(()=>{
      const getData = async()=>{
          const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/tech');
          setTechData(data.data);
      }
      getData();
    }, [])

  dateConvert(techData);



  return (

    <>
      <Allcard heading='Technology' page={techData} />
    </>
  )
}

export default Technology;