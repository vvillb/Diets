import React,{useState} from 'react'
import CalculateMacros from '../info/CalculateMacros';
import FormCalc from '../info/FormCalc';
import TestPyodide from './TestPyodide';


function MealMaker() {
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const[scoops,setScoops]=useState(1);
    const[fruit,setFruit]=useState(2);


    function handleMacrosChange(protein, carbs, fats,scoops,fruit) {
      setProtein(protein);
      setCarbs(carbs);
      setFats(fats);
      setScoops(scoops);
      setFruit(fruit);
    }
    const distribution= CalculateMacros(carbs, fats, protein,scoops,fruit);
  return (
    <div>
      <div>
        <FormCalc onMacrosChange={handleMacrosChange}/>
      </div>
      <div>
        <p>Los macros diarios para las comidas son: {distribution.dailyCarbsTarget} gramos de hidratos, {distribution.dailyProteinTarget} gramos 
          de proteínas y {distribution.dailyFatTarget} gramos de grasas.
          La distribución de los macros en las comidas será: 
          Desayuno: {distribution.targetBreakfastCarbs} gramos de hidratos, 
          {distribution.targetBreakfastProtein} gramos de proteína y {distribution.targetBreakfastFats}
          gramos de grasas. Comida: {distribution.targetLunchDinnerCarbs} gramos de hidratos, 
          {distribution.targetLunchDinnerProtein} gramos de proteína y {distribution.targetLunchDinnerFats} gramos de grasas.
          E igualmente para la cena: {distribution.targetLunchDinnerCarbs} gramos de hidratos, 
          {distribution.targetLunchDinnerProtein} gramos de proteína y {distribution.targetLunchDinnerFats} gramos de grasas.
          Tomando en cuenta que se han cogido {fruit} porciones de fruta,  las cuales
          restan { 30*fruit} grs de carbohidratos, y {scoops} de proteína, que restan unos  
          { 23*scoops} gramos de proteína.
        </p>
      </div>

      <div>
        <TestPyodide var1={distribution.dailyCarbTarget} var2={distribution.dailyProteinTarget} var3={distribution.dailyFatTarget}/>
      </div>
    </div>
  )
}

export default MealMaker
