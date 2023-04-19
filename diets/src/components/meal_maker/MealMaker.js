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
import SnackFajitasSerrano from './mealsComponents/SnackFajitasSerrano';
import QuesoFrescoBatidoConAvena from './mealsComponents/QuesoFrescoBatidoConAvena';
import PanAguacateAtun from './mealsComponents/PanAguacateAtun';
import TostasJamonCocidoCopy from './mealsComponents/TostasJamonSerrano';
import TostasJamonYQueso from './mealsComponents/TostasJamonYQueso';
import CornFlakesProteicos from './mealsComponents/CornFlakesProteicos';
import CopiaEnsaladaGarbanzos from './mealsComponents/CopiaEnsaladaGarbanzos';


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
    const [targetSnackCarbs, setTargetSnackCarbs] = useState(0);
    const [targetSnackProtein, setTargetSnackProtein] = useState(0);
    const [targetSnackFats, setTargetSnackFats] = useState(0);
    const [targetSnack2Carbs, setTargetSnack2Carbs] = useState(0);
    const [targetSnack2Protein, setTargetSnack2Protein] = useState(0);
    const [targetSnack2Fats, setTargetSnack2Fats] = useState(0);
console.log("snaack1")
console.log(targetSnackFats)
console.log("sanaack2")
console.log(targetSnack2Fats)

    useEffect(() => {
      const remainingCarbs = dailyCarbTarget - 30 * fruit;
      const remainingProtein = dailyProteinTarget - 23 * scoops;
      const remainingFat = dailyFatTarget;
      if (distComidas===2){
        setTargetBreakfastCarbs(Math.round(remainingCarbs * 0.18));
        setTargetBreakfastProtein(Math.round(remainingProtein * 0.18));
        setTargetBreakfastFats(Math.round(remainingFat * 0.18));
        setTargetSnackCarbs(Math.round(remainingCarbs * 0.15));
        setTargetSnackProtein(Math.round(remainingProtein * 0.15));
        setTargetSnackFats(Math.round(remainingFat * 0.15));
        setTargetSnack2Carbs(Math.round(remainingCarbs * 0.15));
        setTargetSnack2Protein(Math.round(remainingProtein * 0.15));
        setTargetSnack2Fats(Math.round(remainingFat * 0.15));
        const remainingCarbsForLunchDinner = Math.round(
          (remainingCarbs - targetBreakfastCarbs - targetSnackCarbs-targetSnack2Carbs) / 2
        );
        const remainingProteinForLunchDiner= Math.round(
          (remainingProtein- targetBreakfastProtein-targetSnackProtein-targetSnack2Protein) / 2
        );
        const remainingFatsForLunchDiner=Math.round(
          (remainingFat- targetBreakfastFats-targetSnackFats-targetSnack2Fats) / 2
        );
        setTargetLunchDinnerCarbs(remainingCarbsForLunchDinner);
        setTargetLunchDinnerProtein(remainingProteinForLunchDiner);
        setTargetLunchDinnerFats(remainingFatsForLunchDiner);
      }else{
      if (distComidas===1){
        setTargetSnack2Carbs(0);
        setTargetBreakfastCarbs(Math.round(remainingCarbs * 0.18));
        setTargetBreakfastProtein(Math.round(remainingProtein * 0.18));
        setTargetBreakfastFats(Math.round(remainingFat * 0.18));
        setTargetSnackCarbs(Math.round(remainingCarbs * 0.18));
        setTargetSnackProtein(Math.round(remainingProtein * 0.18));
        setTargetSnackFats(Math.round(remainingFat * 0.18));
        const remainingCarbsForLunchDinner = Math.round(
          (remainingCarbs - targetBreakfastCarbs- targetSnackCarbs) / 2
        );
        const remainingProteinForLunchDiner= Math.round(
          (remainingProtein- targetBreakfastProtein-targetSnackProtein) / 2
        );
        const remainingFatsForLunchDiner=Math.round(
          (remainingFat- targetBreakfastFats-targetSnackFats) / 2
        );
        setTargetLunchDinnerCarbs(remainingCarbsForLunchDinner);
        setTargetLunchDinnerProtein(remainingProteinForLunchDiner);
        setTargetLunchDinnerFats(remainingFatsForLunchDiner);
      }else{
      setTargetBreakfastCarbs(Math.round(remainingCarbs * 0.22));
      setTargetBreakfastProtein(Math.round(remainingProtein * 0.22));
      setTargetBreakfastFats(Math.round(remainingFat * 0.22));
      setTargetSnackCarbs(0);
      setTargetSnackProtein(0);
      setTargetSnackFats(0);
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
    }}}, [protein, carbs, fats, scoops, fruit, dailyCarbTarget, dailyProteinTarget, dailyFatTarget,targetBreakfastCarbs,targetBreakfastProtein,targetBreakfastFats,distComidas,targetSnack2Carbs,targetSnack2Fats,targetSnack2Protein,targetSnackCarbs,targetSnackFats,targetSnackProtein]);
  
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
        <p>Los macros diarios para las comidas son: {targetBreakfastCarbs+2*targetLunchDinnerCarbs+targetSnack2Carbs+targetSnackCarbs} gramos de hidratos, {targetBreakfastProtein+2*targetLunchDinnerProtein+targetSnack2Protein+targetSnackProtein} gramos 
          de proteínas y {dailyFatTarget} gramos de grasas.</p> 

          

          <p>Desayuno:</p>
          <p> {targetBreakfastCarbs} gramos de hidratos,            {targetBreakfastProtein} gramos de proteína 
          y {targetBreakfastFats}        gramos de grasas.</p>

          <p>Comida: </p>

          <p>{targetLunchDinnerCarbs} gramos de hidratos,  {targetLunchDinnerProtein} gramos 
          de proteína y {targetLunchDinnerFats} gramos de grasas.</p>
          
          <p>Cena: </p>
          
          <p>{targetLunchDinnerCarbs} gramos de hidratos, {targetLunchDinnerProtein} gramos 
          de proteína y {targetLunchDinnerFats} gramos de grasas.</p>
         
          Snack 1: {distComidas&&( <p> {targetSnackCarbs} gramos de hidratos, {targetSnackProtein} gramos 
          de proteína y {targetSnackFats} gramos de grasas.</p>)}

          Snack 2: {targetSnack2Carbs&&( <p> {targetSnack2Carbs} gramos de hidratos, {targetSnack2Protein} gramos 
          de proteína y {targetSnack2Fats} gramos de grasas.</p>)}

          <p>
          Tomando en cuenta que se han cogido porciones de fruta,  las cuales
          restan { 30*fruit} grs de carbohidratos, y {scoops} scoop de proteína, que resta 
          unos            { 23*scoops} gramos de proteína.
        </p>
        </div>
      
      <div >
        <div>
          <h4>Opciones para el desayuno:</h4>
        </div>
          <div className='breakfastSection'>
            <SmoothieBowl var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <TostasJamonCocido var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
            <TostasJamonSerrano var1={targetBreakfastCarbs} var2={targetBreakfastProtein} var3={targetBreakfastFats}/>
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
              {/* <CopiaEnsaladaGarbanzos var1={targetLunchDinnerCarbs} var2={targetLunchDinnerProtein} var3={targetLunchDinnerFats}/> */}

            </div>
          </div>
          {targetSnackCarbs&&(
          <>
          <div>
          <h4>Opciones de snacks:</h4>
          </div>
          <div className='breakfastSection'>
            <SnackFajitasSerrano var1={targetSnackCarbs} var2={targetSnackProtein} var3={targetSnackFats}/>
            <QuesoFrescoBatidoConAvena var1={targetSnackCarbs} var2={targetSnackProtein} var3={targetSnackFats}/>
            <PanAguacateAtun var1={targetSnackCarbs} var2={targetSnackProtein} var3={targetSnackFats}/>
            <TostasJamonYQueso var1={targetSnackCarbs} var2={targetSnackProtein} var3={targetSnackFats}/>
            <CornFlakesProteicos var1={targetSnackCarbs} var2={targetSnackProtein} var3={targetSnackFats}/>


          </div>
          </>
          )}

      </div>)}
    </div>
    </div>
    
  )
}

export default MealMaker
