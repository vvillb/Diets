import React from 'react'
import InputForm from '../components/info/InputForm'
import { age, gender, weight, height, activityLevel} from '../components/info/InputForm'
import InputFormHOC from '../components/info/InputFormHOC'

function Home() {
    
  return (
    <div>
      <h1>Generar dietas</h1>
      
      <InputFormHOC/>
    </div>
  )
}


export default Home
