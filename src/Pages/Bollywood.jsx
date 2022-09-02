import React from 'react';
import { bollywoodData } from '../Assets/bollywoodData';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Bollywood = () => {


  dateConvert(bollywoodData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      
        <Allcard heading='Bollywood' page={bollywoodData} />

        
    </>
  )
}

export default Bollywood;