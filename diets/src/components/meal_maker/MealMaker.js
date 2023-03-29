import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Tortitas from '../info/meals/Tortitas';
import Poke from '../info/meals/Poke';
import FormCalc from '../info/FormCalc';



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

console.log("la proteína es")
console.log(protein)
console.log("y los carbos y grasas:")
console.log(carbs,fats)
console.log("scoops y fruta:")
console.log(scoops,fruit)

  return (
    <div>
      <div>
        <FormCalc onMacrosChange={handleMacrosChange}/>
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
