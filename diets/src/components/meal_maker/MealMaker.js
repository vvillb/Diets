import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Tortitas from '../info/meals/Tortitas';
import Poke from '../info/meals/Poke';
import FormCalc from '../info/FormCalc';
import CalculateMacros from '../withPython/meals/CalculateMacros';
import TostasJamonCocido from '../withPython/meals/Desayunos/TostasJamonCocido';




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

const tostas=TostasJamonCocido(TostasJamonCocido(11.6,2.9,1,0.15,1.7,0.3,0,0,4.5,carbs,protein,fats)); 

const distribution= CalculateMacros(carbs, fats, protein,scoops,fruit);

  return (
    <div>
      <div>
        <FormCalc onMacrosChange={handleMacrosChange}/>
      </div>
      <div>
        <p>La distribución de los macros en las comidas será: 
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
      <h2>Desayunos:</h2>
     </div>
      <h3>Tostadas con jamón cocido y aceite de oliva</h3>
      {tostas}
    </div>
  )
}

export default MealMaker
