import React from 'react'
import CalculateMacros from '../components/info/CalculateMacros'
import InputFormHOC from '../components/info/InputFormHOC'

function Home() {
    
  return (
    <div>
      <h1>Generar dietas</h1>
      
      <InputFormHOC/>
      <CalculateMacros/>
    </div>
  )
}


export default Home
