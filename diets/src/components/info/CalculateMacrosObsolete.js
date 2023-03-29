

import React from 'react'

const CalculateMacros = (age, gender, height, weight, activityLevel) => {
  let bmr;
  let tdee;

  // Determine BMR based on gender
  if (gender === 'male') {
    bmr = 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * weight + 6.25 * height - 5 * age - 161;
  }

  // Determine TDEE based on activity level
  switch (activityLevel) {
    case '1':
      tdee = bmr * 1.2;
      break;
    case '2':
      tdee = bmr * 1.375;
      break;
    case '3':
      tdee = bmr * 1.55;
      break;
    case '4':
      tdee = bmr * 1.725;
      break;
    case '5':
      tdee = bmr * 1.9;
      break;
    default:
      tdee = bmr * 1.2;
      break;
  }

  // Calculate macro needs based on TDEE
  const protein = Math.round(0.825 * weight);
  const fat = Math.round(0.25 * tdee / 9);
  const carbs = Math.round((tdee - (protein * 4) - (fat * 9)) / 4);

  // Log the results to the console
  console.log(`Daily macros needs for a ${gender} with a weight of ${weight}kg, height of ${height}cm, age of ${age}, and activity level of ${activityLevel}:`);
  console.log(`Protein: ${protein}g`);
  console.log(`Fat: ${fat}g`);
  console.log(`Carbs: ${carbs}g`);
}
export default CalculateMacros
