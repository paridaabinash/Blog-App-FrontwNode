import React from 'react';
import { hollywoodData } from '../Assets/hollywoodData';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Hollywood = () => {


  dateConvert(hollywoodData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Hollywood' page={hollywoodData} />
    </>
  )
}

export default Hollywood;