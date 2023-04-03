import React from 'react'
import MealMaker from '../components/meal_maker/MealMaker'
import '../App.css'
function Home() {
    
  return (
  /*  <div>
     <Pyodide pythonCode={
        `
        import random
        def shuffle(data):
            for i in range(len(data) - 1):
              j = random.randrange(i, len(data))
              data[i], data[j] = data[j], data[i]
            return data  
        data = [0, 1, 2, 3, 4, 5]
        shuffle(data)
        print(data)`
      }
/>*/
    <div className='homePage'>
     
      <h1>Generar dietas</h1>
        <MealMaker/>
    </div>
  )
}


export default Home


