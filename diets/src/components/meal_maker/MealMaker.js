import React,{useState} from 'react'
import Table from 'react-bootstrap/Table';
import Tortitas from '../info/meals/Tortitas';
import Poke from '../info/meals/Poke';



function MealMaker() {
    const [protein, setProtein] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [fats, setFats] = useState(0);
    const [protein1_1, setProtein1_1] = useState(0);
    const [carbs1_1, setCarbs1_1] = useState(0);
    const [fats1_1, setFats1_1] = useState(0);
    const [protein2_1, setProtein2_1] = useState(0);
    const [carbs2_1, setCarbs2_1] = useState(0);
    const [fats2_1, setFats2_1] = useState(0);

    function handleMacrosChange(proteinValue, carbsValue, fatsValue) {
        setProtein((prevProtein)=>prevProtein+protein1_1+protein2_1);
        setCarbs(carbsValue+carbs1_1+carbs2_1);
        setFats(fatsValue+fats1_1+fats2_1);
      }



  return (
    <div>
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
                    <Tortitas onMacrosChange={handleMacrosChange} />
                </td>
                <td><Poke onMacrosChange={handleMacrosChange}/></td>
                <td><Tortitas onMacrosChange={handleMacrosChange}/></td>
                <td><Tortitas onMacrosChange={handleMacrosChange}/></td>
                <td><Tortitas onMacrosChange={handleMacrosChange}/></td>
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
