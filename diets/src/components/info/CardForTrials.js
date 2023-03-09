import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CalculateMacros({ customer }) {
  const [showResults, setShowResults] = useState(false);
  const [calories, setCalories] = useState(0);
  const [protein, setProtein] = useState(0);
  const [carbs, setCarbs] = useState(0);
  const [fats, setFats] = useState(0);

  const calculate = (goal) => {
    const { age, gender, weight, height, activityLevel, name } = customer.props;
    const BMR =
      gender === 'male'
        ? 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age
        : 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    const activityFactor =
    activityLevel === 1
    ? 1.2 // sedentary
    : activityLevel === 2
    ? 1.375 // lightly active
    : activityLevel === 3
    ? 1.55 // moderately active
    : activityLevel === 4
    ? 1.725 // very active
    : activityLevel === 5
    ? 1.9 // extremely active
    : 1.2; // default to sedentary
    const TDEE = BMR * activityFactor;
    const adjustment = goal === 'deficit' ? -0.2 : goal === 'surplus' ? 0.2 : 0;
    const calories = TDEE * (1 + adjustment);
    const protein = weight * (goal === 'maintain' ? 1.8 : 2);
    const carbs = calories * 0.45 / 4;
    const fats = (calories - protein * 4 - carbs * 4) / 9;

    setCalories(calories.toFixed(0));
    setProtein(protein.toFixed(0));
    setCarbs(carbs.toFixed(0));
    setFats(fats.toFixed(0));
    setShowResults(true);
  };

  if (!customer) {
    return null; // or return an error message or a default value
  }
  return (
    <Card>
      <Card.Header as="h5">Macros diarios</Card.Header>
      <Card.Body>
        <Card.Title>necesidades diarias para {name}</Card.Title>
        <Card.Text>
          Calorías: {calories}
          Carbos: {carbs}
          Proteína: {protein}
          Grasas: {fats}
        </Card.Text>
        <Button variant="primary">Generar dieta</Button>
      </Card.Body>
    </Card>
  );
}

export default CalculateMacros;
