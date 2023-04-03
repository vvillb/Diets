import React,{useState, useEffect} from 'react';
import './form.css'

function FormCalc(props) {
  const [currentCarbs, setCurrentCarbs] = useState(0);
  const [currentProtein, setCurrentProtein] = useState(0);
  const [currentFats, setCurrentFats] = useState(0);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [caloriasExtraObjetivo, setCaloriasExtraObjetivo] = useState("");
  const [currentName, setCurrentName] = useState("");
  const [age,setAge]=useState("");
  const [gender,setGender]=useState("");
  const [weight,setWeight]=useState("");
  const [height,setHeight]=useState("");
  const [activityLevel,setActivityLevel]=useState(3);
  const [scoops,setScoops]=useState(1);
  const [fruit,setFruit]=useState(2);
  const [currentTMB,setCurrentTMB]=useState(0);
  const [currentDailyCalories,setCurrentDailyCalories]=useState(0);
  const[currentTargetCalories,setCurrentTargetCalories]=useState(0);

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
  useEffect(()=>{
    document.querySelector('#scoops').value="";
  },[])
  useEffect(()=>{
    document.querySelector('#fruit').value="";
  },[])
  useEffect(()=>{
    document.querySelector('#caloriasExtraObjetivo').value="";
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

 // Convert height from cm to inches
  const heightInches = height / 2.54;
 // Convert weight from kg to pound
  const weightPounds = weight * 2.205;
 
 
 
 // Calculate TMB using the Harrison y Benedict formula
 let TMB;
 if (currentGender === "male") {
   TMB = Math.round(10*currentWeight+6.25*currentHeight-5*currentAge+5);
 } else if (currentGender === "female") {
   TMB = Math.round(10*currentWeight+6.25*currentHeight-5*currentAge-161);
 }setCurrentTMB(TMB);
 
  

     // Multiply TMB by the activity level factor
     let activityFactor;
     switch (currentActivityLevel) {
       case "1":
         activityFactor = 1.2;
         break;
       case "2":
         activityFactor = 1.375;
         break;
       case "3":
         activityFactor = 1.55;
         break;
       case "4":
         activityFactor = 1.725;
         break;
       case "5":
         activityFactor = 1.9;
         break;
       default:
         activityFactor = 1.2;
         break;
     }
     let DailyCalories = Math.round(TMB * activityFactor);
     setCurrentDailyCalories(DailyCalories);
 console.log(currentActivityLevel)
// Add caloriasExtraObjetivo to DailyCalories to get targetCalories
const targetCalories = DailyCalories + parseInt(caloriasExtraObjetivo);
if (caloriasExtraObjetivo === '') {
  // Display a message if the caloriasExtraObjetivo is empty
  setCurrentTargetCalories('apunta las calorías que quieres sumar o restar al objetivo');
} else {
  setCurrentTargetCalories(targetCalories);
}
// Calculate protein, fats, and carbohydrates



  let protein = Math.round(weight * 2);
  let fats = Math.round(weightPounds * 0.4);
  const caloriasProteinas = protein * 4;
  const caloriasGrasas = fats * 9;
  const caloriasCarbos = targetCalories - caloriasProteinas - caloriasGrasas;
  let carbs = Math.round(caloriasCarbos / 4);
  let calories=Math.round(4*carbs + 4*protein + 9*fats);
  let name=currentName;
    setCurrentCalories(calories);
    setCurrentCarbs(carbs);
    setCurrentProtein(protein);
    setCurrentFats(fats);  
    setScoops(scoops);
    setFruit(fruit); 
    props.onMacrosChange(protein, carbs, fats,scoops,fruit);   
  }

 

  return (
    <>
    <form  class="row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label htmlFor="age">Edad:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={event=>setAge(event.target.value)}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="gender">Género:</label>
        <select
          className="form-control"
          id="gender"
          value={gender}
          onChange={event=>setGender(event.target.value)}
        >
          <option value="">Seleccionar</option>
          <option value="male">Hombre</option>
          <option value="female">Mujer</option>
          
        </select>
      </div>
      <div class="col-auto">
        <label htmlFor="weight">Peso (kg):</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={weight}
          onChange={event=>setWeight(event.target.value)}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="height">Altura (cm):</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={height}
          onChange={event=>setHeight(event.target.value)}
        />
      </div>
      <div class="col-auto d-flex flex-column">
        <label htmlFor="activityLevel">Nivel de actividad:</label>
        <input
          type="range"
          className="form-control-range"
          id="activityLevel"
          min="1"
          max="5"
          value={activityLevel}
          onChange={event=>setActivityLevel(event.target.value)}
        />
         <div className="activity-tags">
          <span className={activityLevel === "1" ? "active" : ""}>Sedentario</span>
          <span className={activityLevel === "2" ? "active" : ""}>Ligera</span>
          <span className={activityLevel === "3" ? "active" : ""}>Moderada</span>
          <span className={activityLevel === "4" ? "active" : ""}>Intensa</span>
          <span className={activityLevel === "5" ? "active" : ""}>Muy intensa</span>
        </div>
      </div>
      <h5>Calorías de mantenimeinto (Harrison & Benedict):</h5>
      <input type="text" id="currentTMB" value={currentTMB}  readOnly />
      <h5>Calorías diarias (según nivel de actividad):</h5>
      <input type="text" id="currentDailyCalories" value={currentDailyCalories}  readOnly />
      <h5>Calorías objetivo: </h5>
      <input type="text" id="currentTargetCalories" value={currentTargetCalories}  readOnly />

      <h5>Carbohidratos(gr):</h5>
      <input type="text" id="carbs" value={currentCarbs}  readOnly />
      <h5>Proteína (gr):</h5>
      <input type="text" id="protein" value={currentProtein}  readOnly />
      <h5>Grasas (gr):</h5>
      <input type="text" id="fats" value={currentFats}  readOnly />
      <h5>Calorías totales:</h5>
      <input type="text" id="calories" value={currentCalories}  readOnly />
      <div class="col-auto">
        <label>Calorías a sumar o restar según objetivo (incluye signo):</label>
        <input
          type="number"
          className={`form-control${caloriasExtraObjetivo === '' ? ' text-danger' : ''}`}
          id="caloriasExtraObjetivo"
          value={caloriasExtraObjetivo}
          onChange={event=>setCaloriasExtraObjetivo(event.target.value)}
        />
      </div>
      <div class="col-auto">
        <label>Scoops de proteína:</label>
        <select
          className="form-control"
          id="scoops"
          value={scoops}
          onChange={event=>setScoops(event.target.value)}
          
        >
          <option value="1"> 1</option>
          <option value="2">2</option>
          
        </select>
      </div>
      <div class="col-auto">
        <label >Porciones de fruta:</label>
        <select
          className="form-control"
          id="fruit"
          onChange={event=>setFruit(event.target.value)}
        >
          <option value="1">1 (30 gramos de hidratos) </option>
          <option value="2">2 (60 gramos de hidratos)</option>
         </select>
      </div>
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