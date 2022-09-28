import React, {useState, useEffect} from 'react';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';
import axios from 'axios';


const Food = () => {

  const [foodData, setDetails] = useState([]);

  useEffect(()=>{
      const getData = async()=>{
          const data=await axios.get('https://blog-app-serverside.herokuapp.com/api/food');
          setDetails(data.data);
      }
      getData();
    }, [])


  dateConvert(foodData);


  return (

    <>
      <Allcard heading='Food' page={foodData} />
    </>
  )
}

export default Food;