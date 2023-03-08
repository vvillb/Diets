

function CalculateMacros(inputs, goal) {
  const { age, gender, weight, height, activityLevel } = inputs;
  const BMR = gender === 'male'
    ? 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age)
    : 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  const activityFactor = activityLevel === 1.2
    ? 1.2 // sedentary
    : activityLevel === 1.375
    ? 1.375 // lightly active
    : activityLevel === 1.55
    ? 1.55 // moderately active
    : activityLevel === 1.725
    ? 1.725 // very active
    : activityLevel === 1.9
    ? 1.9 // extremely active
    : 1.2; // default to sedentary
  const TDEE = BMR * activityFactor;
  const adjustment = goal === 'deficit' ? -0.2 : goal === 'surplus' ? 0.2 : 0;
  const calories = TDEE * (1 + adjustment);
  const protein = weight * (goal === 'maintain' ? 1.8 : 2);
  const carbs = calories * 0.45 / 4;
  const fats = (calories - (protein * 4) - (carbs * 4)) / 9;
  const results={ calories, protein, carbs, fats };
  return { results };
}

export default CalculateMacros
