import React from 'react'
import CalculateMacros from '../components/info/CalculateMacros'
import Tabs from '../components/dietsResults/Tabs'
import FormCalc from '../components/info/FormCalc'
import MealMaker from '../components/meal_maker/MealMaker'
import Tortitas from '../components/info/meals/Tortitas'

function Home() {
    
  return (
    <div>
      <h1>Generar dietas</h1>
      
      
      
      <FormCalc/>
      <MealMaker/>
    </div>
  )
}


export default Home
