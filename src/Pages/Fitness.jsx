import React from 'react';
import { fitnessData } from '../Assets/fitnessData';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Fitness = () => {


  dateConvert(fitnessData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Fitness' page={fitnessData} />
    </>
  )
}

export default Fitness;