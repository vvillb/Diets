import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function cards(clientName,results) {
  return (
    <Card>
      <Card.Header as="h5">Macros diarios</Card.Header>
      <Card.Body>
        <Card.Title>necesidades diarias para {clientName}</Card.Title>
        <Card.Text>
          Calorías: {results.calories}
          Carbos: {results.carbs}
          Proteína: {results.prot}
          Grasas: {results.fat}
        </Card.Text>
        <Button variant="primary">Generar dieta</Button>
      </Card.Body>
    </Card>
  );
}

export default cards;