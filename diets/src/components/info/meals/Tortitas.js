import React,{useState,useEffect} from 'react'
import Food from '../info/Food';
import Card from 'react-bootstrap/Card';

function Tortitas() {
  const [currentCarbs, setCurrentCarbs] = useState(0);
  const [currentProtein, setCurrentProtein] = useState(0);
  const [currentFats, setCurrentFats] = useState(0);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [huevos,setHuevos]=useState(1);
  const [claras,setClaras]=useState(50);
  const [lecheDeAlmendras,setLecheDeAlmendras]=useState(250);
  const [harinaDeAvena,setHarinaDeAvena]=useState(50); 
  const [chocolate,setChocolate]=useState(20);
  const [quesoFrescoBatido,setQuesoFrescoBatido]=useState(150);

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
    let protein = Food[1_11].protein*huevos+Food[1_12].protein*claras+Food[3_5].protein*lecheDeAlmendras+Food[2_12].protein*harinaDeAvena+Food[3_7].protein*chocolate+Food[1_7].protein*quesoFrescoBatido;
    let fats =Food[1_11].fats*huevos+Food[1_12].fats*claras+Food[3_5].fats*lecheDeAlmendras+Food[2_12].fats*harinaDeAvena+Food[3_7].fats*chocolate+Food[1_7].fats*quesoFrescoBatido;
    let carbs = Food[1_11].carbs*huevos+Food[1_12].carbs*claras+Food[3_5].carbs*lecheDeAlmendras+Food[2_12].carbs*harinaDeAvena+Food[3_7].carbs*chocolate+Food[1_7].carbs*quesoFrescoBatido;
    let calories=protein*4 + carbs*4 + fats*9;
        setCurrentCalories(calories);
        setCurrentCarbs(carbs);
        setCurrentProtein(protein);
        setCurrentFats(fats);   
  }
  return (
    <div>
        <Card>
            <Card.Body>
                <Card.Title>Tortitas de avena</Card.Title>
                <form>
                    <div class="col-auto">
                        <label>Huevos</label>
                        <select
                            className="form-control"
                            id="huevos"
                            value={huevos}
                            onChange={event=>setHuevos(event.target.value)}
                        >
                            <option value="1">1 huevo</option>
                            <option value="2">2 huevo</option>
                            <option value="3">3 huevo</option>
                            <option value="4">4 huevo</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Claras </label>
                        <select
                            className="form-control"
                            id="claras"
                            value={claras}
                            onChange={event=>setClaras(event.target.value)}
                        >
                            <option value="50">50 (ml)</option>
                            <option value="75">75 (ml)</option>
                            <option value="100">100 (ml)</option>
                            <option value="125">125 (ml)</option>
                            <option value="150">150 (ml)</option>
                            <option value="200">200 (ml)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Leche de almendras</label>
                        <select
                            className="form-control"
                            id="lecheDeAlmendras"
                            value={lecheDeAlmendras}
                            onChange={event=>setLecheDeAlmendras(event.target.value)}
                        >
                            <option value="100">100 (ml)</option>
                            <option value="150">150 (ml)</option>
                            <option value="200">200 (ml)</option>
                            <option value="250">250 (ml)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Harina de avena</label>
                        <select
                            className="form-control"
                            id="harinaDeAvena"
                            value={harinaDeAvena}
                            onChange={event=>setHarinaDeAvena(event.target.value)}
                        >
                            <option value="30">30 (gr)</option>
                            <option value="40">40 (gr)</option>
                            <option value="50">50 (gr)</option>
                            <option value="60">60 (gr)</option>
                            <option value="70">70 (gr)</option>
                            <option value="80">80 (gr)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Chocolate 85%</label>
                        <select
                            className="form-control"
                            id="chocolate"
                            value={chocolate}
                            onChange={event=>setChocolate(event.target.value)}
                        >
                            <option value="10">1 (oz)</option>
                            <option value="20">2 (oz)</option>
                            <option value="30">3 (oz)</option>
                            <option value="40">4 (oz)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Queso fresco batido</label>
                        <select
                            className="form-control"
                            id="quesoFrescoBatido"
                            value={quesoFrescoBatido}
                            onChange={event=>setQuesoFrescoBatido(event.target.value)}
                        >
                            <option value="100">100 (gr)</option>
                            <option value="150">150 (gr)</option>
                            <option value="200">200 (gr)</option>
                            <option value="250">250 (gr)</option>
                            
                        </select>
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
                        guardar 
                    </button>
                </form>
            </Card.Body>
        </Card>
    </div>
  )
}

export default Tortitas
