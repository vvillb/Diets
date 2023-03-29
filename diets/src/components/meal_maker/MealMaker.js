import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Tortitas from '../info/meals/Tortitas';
import Poke from '../info/meals/Poke';
import FormCalc from '../info/FormCalc';
import CalculateMacros from '../withPython/meals/CalculateMacros';




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
      <Table  striped bordered hover variant="dark">
        <thead>
        <tr>
          <th>#</th>
          <th>Desayuno</th>
          <th>Comida 1</th>
          <th>Comida 2</th>
          <th>Snack post-entreno</th>
          <th>Fruta</th>
          <th>Totales del día</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>opción 1</td>
                <td>
                    
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>
                    <div>
                        <div>
                          <h8>Calorías:</h8>   
                        </div>
                        <div>
                          <h8>Proteínas:{protein}</h8>  
                        </div>
                        <div>
                          <h8>Hidratos:{carbs}</h8>  
                        </div>
                        <div>
                           <h8>Grasas:{fats}</h8> 
                        </div>                        
                    </div>
                    
                </td>
            </tr>
            <tr>
                <td>opción 2</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>opción 3</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>opción 4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
      </Table>

      
    </div>
  )
}

export default MealMaker
