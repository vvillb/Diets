import { useState } from "react";
import Food from "./Food"; // Import the array of food items

export function InputForm() {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activityLevel, setActivityLevel] = useState(5);
  const [selectedFood, setSelectedFood] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleActivityLevelChange = (event) => {
    setActivityLevel(event.target.value);
  };

  const handleFoodChange = (event) => {
    setSelectedFood(event.target.value);
  };

  const handleSubmit = (event) => {
   console.log({age, gender, weight, height, activityLevel})
    event.preventDefault();
    // Handle form submission
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={handleAgeChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="gender">Gender:</label>
        <select
          className="form-control"
          id="gender"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={height}
          onChange={handleHeightChange}
        />
      </div>
      <div className="form-group">
        <label htmlFor="activityLevel">Activity Level:</label>
        <input
          type="range"
          className="form-control-range"
          id="activityLevel"
          min="0"
          max="10"
          value={activityLevel}
          onChange={handleActivityLevelChange}
        />
      </div>
      <div className="form-group">
        <label>Food:</label>
        {Food.map((food) => (
          <div key={food.name} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="food"
              value={food.name}
              checked={selectedFood === food.name}
              onChange={handleFoodChange}
            />
            <label className="form-check-label">{food.name}</label>
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default InputForm;
