import React from 'react';
import { techData } from '../Assets/techData';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Technology = () => {


  dateConvert(techData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Technology' page={techData} />
    </>
  )
}

export default Technology;