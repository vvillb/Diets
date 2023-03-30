import React from 'react'
import CalculateMacros from '../components/info/CalculateMacros'
import Tabs from '../components/dietsResults/Tabs'
import FormCalc from '../components/info/FormCalc'
import MealMaker from '../components/meal_maker/MealMaker'
import Tortitas from '../components/info/meals/Tortitas'
import MacroSplitCalculator from '../components/info/MacroSplitCalculator'

function Home() {
    
  return (
    <div>
      <h1>Generar dietas</h1>
      
      <MacroSplitCalculator/>
      
      <FormCalc/>
      <MealMaker/>
    </div>
  )
}


export default Home
