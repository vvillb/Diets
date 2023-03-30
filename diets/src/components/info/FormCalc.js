import React,{useState, useEffect} from 'react';


function FormCalc() {
  const [currentCarbs, setCurrentCarbs] = useState(0);
  const [currentProtein, setCurrentProtein] = useState(0);
  const [currentFats, setCurrentFats] = useState(0);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [currentName, setCurrentName] = useState("");

  useEffect(()=>{
    document.querySelector('#carbs').value="";
  },[])
  useEffect(()=>{
    document.querySelector('#protein').value="";
  },[])
  useEffect(()=>{
    document.querySelector('#fats').value="";
  },[])
  useEffect(()=>{
    document.querySelector('#calories').value="";
  },[])
  
  

  const CalculateMacros=(e)=>{
    e.preventDefault();
    //simple validation to prevent the code breaking if 
    //the user hits calculate without entering a value
    let currentWeight=document.querySelector('#weight').value
    if(currentWeight==='')
    return;
    let currentHeight=document.querySelector('#height').value
    if(currentHeight==='')
    return;
    let currentGender=document.querySelector('#gender').value
    if(currentGender==='')
    return;
    let currentAge=document.querySelector('#age').value
    if(currentAge==='')
    return;
    let currentActivityLevel=document.querySelector('#activityLevel').value
    if(currentActivityLevel==='')
    return;
    let bmr;
  let tdee;

  // Determine BMR based on gender
  if (currentGender === 'male') {
    bmr = 10 * currentWeight + 6.25 * currentHeight - 5 * currentAge + 5;
  } else {
    bmr = 10 * currentWeight + 6.25 * currentHeight - 5 * currentAge - 161;
  }

  // Determine TDEE based on activity level
  switch (currentActivityLevel) {
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
  let protein = Math.round(0.825 * currentWeight);
  let fats = Math.round(0.25 * tdee / 9);
  let carbs = Math.round((tdee - (protein * 4) - (fats * 9)) / 4);
  let calories=Math.round(4*carbs + 4*protein + 9*fats);
  let name=currentName;
    setCurrentCalories(calories);
    setCurrentCarbs(carbs);
    setCurrentProtein(protein);
    setCurrentFats(fats);   
  }

 

  return (
    <>
    <form  class="row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          
        />
      </div>
      <div class="col-auto">
        <label htmlFor="gender">Gender:</label>
        <select
          className="form-control"
          id="gender"
          
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="col-auto">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          
        />
      </div>
      <div class="col-auto">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          className="form-control"
          id="height"
          
        />
      </div>
      <div class="col-auto">
        <label htmlFor="activityLevel">Activity Level:</label>
        <input
          type="range"
          className="form-control-range"
          id="activityLevel"
          min="1"
          max="5"
          
        />
      </div>
      <h5>Carbohidratos(gr):</h5>
      <input type="text" id="carbs" value={currentCarbs}  readOnly />
      <h5>Proteína (gr):</h5>
      <input type="text" id="protein" value={currentProtein}  readOnly />
      <h5>Grasas (gr):</h5>
      <input type="text" id="fats" value={currentFats}  readOnly />
      <h5>Calorías totales:</h5>
      <input type="text" id="calories" value={currentCalories}  readOnly />

      <button type="submit" className="btn btn-primary" onClick={CalculateMacros}> 
        Calcular 
      </button>
    </form>
    <div>
      <h1>Recuerda apuntar los resultados!</h1>
    </div>
    </>
  );
}
export default FormCalc;