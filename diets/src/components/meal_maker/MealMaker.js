import React,{useState, useEffect} from 'react'
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
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [dailyCarbTarget, setDailyCarbTarget] = useState(0);
    const [dailyProteinTarget, setDailyProteinTarget] = useState(0);
    const [dailyFatTarget, setDailyFatTarget] = useState(0);
    const [targetBreakfastCarbs, setTargetBreakfastCarbs] = useState(0);
    const [targetBreakfastProtein, setTargetBreakfastProtein] = useState(0);
    const [targetBreakfastFats, setTargetBreakfastFats] = useState(0);
    const [targetLunchDinnerCarbs, setTargetLunchDinnerCarbs] = useState(0);
    const [targetLunchDinnerProtein, setTargetLunchDinnerProtein] = useState(0);
    const [targetLunchDinnerFats, setTargetLunchDinnerFats] = useState(0);


    useEffect(() => {
      const remainingCarbs = dailyCarbTarget - 30 * fruit;
      const remainingProtein = dailyProteinTarget - 23 * scoops;
      const remainingFat = dailyFatTarget;
      setTargetBreakfastCarbs(Math.round(remainingCarbs * 0.22));
      setTargetBreakfastProtein(Math.round(remainingProtein * 0.22));
      setTargetBreakfastFats(Math.round(remainingFat * 0.22));
      const remainingCarbsForLunchDinner = Math.round(
        (remainingCarbs - targetBreakfastCarbs) / 2
      );
      const remainingProteinForLunchDiner= Math.round(
        (remainingProtein- targetBreakfastProtein) / 2
      );
      setTargetLunchDinnerCarbs(remainingCarbsForLunchDinner);
      setTargetLunchDinnerProtein(remainingProteinForLunchDiner);
      setTargetLunchDinnerFats(Math.round(remainingFat / 2));
    }, [protein, carbs, fats, scoops, fruit, dailyCarbTarget, dailyProteinTarget, dailyFatTarget,targetBreakfastCarbs,targetBreakfastProtein]);
  
    function handleMacrosChange(protein, carbs, fats, scoops, fruit) {
      setProtein(protein);
      setCarbs(carbs);
      setFats(fats);
      setScoops(scoops);
      setFruit(fruit);
      setFormSubmitted(true);
      setDailyCarbTarget(carbs);
      setDailyProteinTarget(protein);
      setDailyFatTarget(fats);
    }
  

  return (
    <div>
      <div>
        <FormCalc onMacrosChange={handleMacrosChange}/>
      </div>
      <div>
      {formSubmitted && (
      <div>
        <div>
        <p>Los macros diarios para las comidas son: {targetBreakfastCarbs+2*targetLunchDinnerCarbs} gramos de hidratos, {targetBreakfastProtein+2*targetLunchDinnerProtein} gramos 
          de proteínas y {dailyFatTarget} gramos de grasas.
          La distribución de los macros en las comidas será: 
          Desayuno: {targetBreakfastCarbs} gramos de hidratos, 
          {targetBreakfastProtein} gramos de proteína y {targetBreakfastFats}
          gramos de grasas. Comida: {targetLunchDinnerCarbs} gramos de hidratos, 
          {targetLunchDinnerProtein} gramos de proteína y {targetLunchDinnerFats} gramos de grasas.
          E igualmente para la cena: {targetLunchDinnerCarbs} gramos de hidratos, 
          {targetLunchDinnerProtein} gramos de proteína y {targetLunchDinnerFats} gramos de grasas.
          Tomando en cuenta que se han cogido {fruit} porciones de fruta,  las cuales
          restan { 30*fruit} grs de carbohidratos, y {scoops} de proteína, que restan unos  
          { 23*scoops} gramos de proteína.
        </p>
        </div>
      
      <div>
        <h4>Opciones para el desayuno:</h4>
        <h5>Tostadas con jamón cocido:</h5>
        

        <TostasJamonCocido var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
        <h5>Tostadas con Jamón Serrano y tomate + copos de avena:</h5>
        <TostasJamonSerrano var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
        <h5>Smoothie Bowl:</h5>
        <SmoothieBowl var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
        <h5>Huevos Revueltos:</h5>
        <HuevosRevueltos  var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
      </div>
      <div>
        <h4>Opciones para la comida y cena :</h4>
        <h5>Poke Bowl:</h5>
        <PyodidePoke var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Pasta con pollo y queso</h5>
        <PastaPolloQueso var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Pescado con arroz y aceitunas + chocolate 85% y yogur</h5>
        <PescadoArroz var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Gnocchi con pollo</h5>
        <GnocchiPollo var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Ternera con patatas y aceitunas</h5>
        <TerneraPatataAceitunas var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Ensalada de garbanzos</h5>
        <EnsaladaGarbanzos var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
        <h5>Ternera con patatas y un yogur </h5>
        <TerneraPatataYogur var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
      </div>
       
      </div>)}
    </div>
    </div>
    
  )
}

export default MealMaker
