import React from 'react'
import Table from 'react-bootstrap/Table';
import Tortitas from '../info/meals/Tortitas';

function MealMaker() {
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
                    <Tortitas/>
                </td>
                <td><Tortitas/></td>
                <td><Tortitas/></td>
                <td><Tortitas/></td>
                <td><Tortitas/></td>
                <td>
                    <div>
                        <div>
                          <h8>Calorías:</h8>   
                        </div>
                        <div>
                          <h8>Proteínas:</h8>  
                        </div>
                        <div>
                          <h8>Hidratos:</h8>  
                        </div>
                        <div>
                           <h8>Grasas:</h8> 
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
