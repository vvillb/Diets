import React,{useState} from 'react'
import CalculateMacros from '../info/CalculateMacros';
import FormCalc from '../info/FormCalc';


function MealMaker() {
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const[scoops,setScoops]=useState(1);
    const[fruit,setFruit]=useState(2);
    const [result, setResult] = useState(null);

    function handleMacrosChange(protein, carbs, fats,scoops,fruit) {
      setProtein(protein);
      setCarbs(carbs);
      setFats(fats);
      setScoops(scoops);
      setFruit(fruit);


    // Send input data to server and get result
    fetch('/api/calculate-macros', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        carbs_pasta: 0.67, // Replace with actual input data
        protein_pasta: 0.12,
        fat_pasta: 30,
        carbs_chicken: 0.005,
        protein_chicken: 0.22,
        fat_chicken: 0.018,
        carbs_mozzarella: 0.02,
        protein_mozzarella: 0.17,
        fat_mozzarella: 0.14,
        carbs_goal: 50,
        protein_goal: 43,
        fat_goal: 10
      })
    })
    .then(response => response.text())
    .then(result => setResult(result))
    .catch(error => console.error(error));
  }

    
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
      {result && (
        <div>
          <p>{result}</p>
        </div>
      )}
      
    </div>
  )
}

export default MealMaker
