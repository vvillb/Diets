import React from 'react'
import MealMaker from '../components/meal_maker/MealMaker'
import BetterForm from '../components/info/BetterForm'


import '../App.css'
function Home() {
    
  return (
      <div className='homePage'>
     
      <h1>Generar dietas</h1>

        {/* <BetterForm/> */}
        <MealMaker/>
    </div>
  )
}


export default Home


