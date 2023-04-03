import React,{useState} from 'react'
import CalculateMacros from '../info/CalculateMacros';
import FormCalc from '../info/FormCalc';
import PyodidePoke from './PyodidePoke';
import TostasJamonCocido from './mealsComponents/TostasJamonCocido';
import TostasJamonSerrano from './mealsComponents/TostasJamonSerrano';
import HuevosRevueltos from './mealsComponents/HuevosRevueltos';
import SmoothieBowl from './mealsComponents/SmoothieBowl';
import PastaPolloQueso from './mealsComponents/PastaPolloQueso';
import PescadoArroz from './mealsComponents/PescadoArroz';
import GnocchiPollo from './mealsComponents/GnocchiPollo';
import TerneraPatataAceitunas from './mealsComponents/TerneraPatataAceitunas';
import EnsaladaGarbanzos from './mealsComponents/EnsaladaGarbanzos';
import TerneraPatataYogur from './mealsComponents/TerneraPatataYogur';


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
        <p>Los macros diarios para las comidas son: {distribution.dailyCarbTarget} gramos de hidratos, {distribution.dailyProteinTarget} gramos 
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
        <TostasJamonSerrano var1={distribution.targetBreakfastCarbs} var2={distribution.targetBreakfastProtein} var3={distribution.targetBreakfastFats}/>
        <h5>Smoothie Bowl:</h5>
        <SmoothieBowl var1={distribution.targetBreakfastCarbs} var2={distribution.targetBreakfastProtein} var3={distribution.targetBreakfastFats}/>
        <h5>Huevos Revueltos:</h5>
        <HuevosRevueltos  var1={distribution.targetBreakfastCarbs} var2={distribution.targetBreakfastProtein} var3={distribution.targetBreakfastFats}/>
      </div>
      <div>
        <h4>Opciones para la comida y cena :</h4>
        <h5>Poke Bowl:</h5>
        <PyodidePoke var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Pasta con pollo y queso</h5>
        <PastaPolloQueso var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Pescado con arroz y aceitunas + chocolate 85% y yogur</h5>
        <PescadoArroz var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Gnocchi con pollo</h5>
        <GnocchiPollo var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Ternera con patatas y aceitunas</h5>
        <TerneraPatataAceitunas var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Ensalada de garbanzos</h5>
        <EnsaladaGarbanzos var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
        <h5>Ternera con patatas y un yogur </h5>
        <TerneraPatataYogur var1={distribution.targetLunchDinnerCarbs} var2={distribution.targetLunchDinnerProtein} var3={distribution.targetLunchDinnerFats}/>
      </div>
    </div>
  )
}

export default MealMaker
