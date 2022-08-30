import React from 'react';
import { foodData } from '../Assets/foodData';
import Allcard from '../Components/Allcard';
import { dateConvert } from '../Components/Dateconvert';

const Food = () => {


  dateConvert(foodData);


  // const slicedbollywoodData = bollywoodData.slice(0, 40);

  return (

    <>
      <Allcard heading='Food' page={foodData} />
    </>
  )
}

export default Food;