import React,{useState} from 'react'
import CalculateMacros from '../info/CalculateMacros';
import FormCalc from '../info/FormCalc';
import TestPyodide from './TestPyodide';
import PyodidePoke from './PyodidePoke';
import TostasJamonCocido from './mealsComponents/TostasJamonCocido';
import TostasJamonCocidoCopy from './mealsComponents/TostasJamonCocidoCopy';


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
        <h4>Opciones para el desayuno:</h4>
        <h5>Tostadas con jamón cocido:</h5>
        

        <TostasJamonCocido var1={distribution.targetBreakfastCarbs} var2={distribution.targetBreakfastProtein} var3={distribution.targetBreakfastFats}/>
        <h5>Tostadas con Jamón Serrano y tomate + copos de avena:</h5>
        <TostasJamonCocidoCopy var1={distribution.targetBreakfastCarbs} var2={distribution.targetBreakfastProtein} var3={distribution.targetBreakfastFats}/>
        <h5>Smoothie Bowl:</h5>
        <h5>Huevos Revueltos:</h5>
      </div>
      <div>
        <h4>Opciones para la comida y cena :</h4>
        <h5>Poke Bowl:</h5>
        <PyodidePoke var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
      </div>
    </div>
  )
}

export default MealMaker
