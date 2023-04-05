import React,{useState, useEffect} from 'react'
import FormCalc from '../info/FormCalc';
import PyodidePoke from './mealsComponents/PyodidePoke';
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
import TortitasAvena from './mealsComponents/TortitasAvena';
import '../../App.css'


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
    const [distComidas,setDistComidas]=useState(0);


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
      const remainingFatsForLunchDiner=Math.round(
        (remainingFat- targetBreakfastFats) / 2
      );
      setTargetLunchDinnerCarbs(remainingCarbsForLunchDinner);
      setTargetLunchDinnerProtein(remainingProteinForLunchDiner);
      setTargetLunchDinnerFats(remainingFatsForLunchDiner);
    }, [protein, carbs, fats, scoops, fruit, dailyCarbTarget, dailyProteinTarget, dailyFatTarget,targetBreakfastCarbs,targetBreakfastProtein,targetBreakfastFats]);
  
    function handleMacrosChange(protein, carbs, fats, scoops, fruit,distComidas) {
      setProtein(protein);
      setCarbs(carbs);
      setFats(fats);
      setScoops(scoops);
      setFruit(fruit);
      setFormSubmitted(true);
      setDailyCarbTarget(carbs);
      setDailyProteinTarget(protein);
      setDailyFatTarget(fats);
      setDistComidas(distComidas);
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
          Desayuno: {targetBreakfastCarbs} gramos de hidratos,            {targetBreakfastProtein} gramos de proteína 
          y {targetBreakfastFats}        gramos de grasas. Comida: {targetLunchDinnerCarbs} gramos de hidratos,  {targetLunchDinnerProtein} gramos 
          de proteína y {targetLunchDinnerFats} gramos de grasas.
          E igualmente para la cena: {targetLunchDinnerCarbs} gramos de hidratos, {targetLunchDinnerProtein} gramos 
          de proteína y {targetLunchDinnerFats} gramos de grasas.
          Tomando en cuenta que se han cogido {fruit} porciones de fruta,  las cuales
          restan { 30*fruit} grs de carbohidratos, y {scoops} de proteína, que restan 
          unos            { 23*scoops} gramos de proteína.
        </p>
        </div>
      
      <div >
        <div>
          <h4>Opciones para el desayuno:</h4>
        </div>
          <div className='breakfastSection'>
            <TostasJamonCocido var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <TostasJamonSerrano var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <SmoothieBowl var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <TortitasAvena var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <HuevosRevueltos  var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
          </div>
        </div>
        <div>
          <div>
            <h4>Opciones para la comida y cena :</h4>
          </div>
            <div className='breakfastSection'>
              <PyodidePoke var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <PastaPolloQueso var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <PescadoArroz var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <GnocchiPollo var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <TerneraPatataAceitunas var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <EnsaladaGarbanzos var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
              <TerneraPatataYogur var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/>
            </div>
          </div>
      </div>)}
    </div>
    </div>
    
  )
}

export default MealMaker
