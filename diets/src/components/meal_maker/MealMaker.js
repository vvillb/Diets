import React from 'react'
import Table from 'react-bootstrap/Table';

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
        </tr>
        </thead>
        <tbody>
            <tr>
                <td>opción 1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>opción 2</td>
            </tr>
            <tr>
                <td>opción 3</td>
            </tr>
            <tr>
                <td>opción 4</td>
            </tr>
        </tbody>
      </Table>

      
    </div>
  )
}

export default MealMaker
