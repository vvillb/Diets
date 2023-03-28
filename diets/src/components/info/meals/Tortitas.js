import React,{useState,useEffect} from 'react'
import FoodSimpler from '../info/FoodSimpler';
import Card from 'react-bootstrap/Card';
import '../../../App.css'

function Tortitas(props) {
  const [currentCarbs, setCurrentCarbs] = useState(0);
  const [currentProtein, setCurrentProtein] = useState(0);
  const [currentFats, setCurrentFats] = useState(0);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [huevos,setHuevos]=useState(1);
  const [claras,setClaras]=useState(50);
  const [lecheDeAlmendras,setLecheDeAlmendras]=useState(250);
  const [harinaDeAvena,setHarinaDeAvena]=useState(50); 
  const [chocolate,setChocolate]=useState(2);
  const [quesoFrescoBatido,setQuesoFrescoBatido]=useState(150);
  const[protein1_1,setProtein1_1]=useState(0);
  const[carbs1_1,setCarbs1_1]=useState(0);
  const[fats1_1,setFats1_1]=useState(0);

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

  //to pass props to parent component
  
  //
  const CalculateMacros=(e)=>{
    e.preventDefault();
    let protein = Math.floor((FoodSimpler[11].prot*huevos)+(FoodSimpler[12].prot*claras/100)+(FoodSimpler[32].prot*lecheDeAlmendras/100)+(FoodSimpler[24].prot*harinaDeAvena/100)+(FoodSimpler[34].prot*chocolate)+(FoodSimpler[7].prot*quesoFrescoBatido/100));
    let fats =Math.floor(FoodSimpler[11].fats*huevos+FoodSimpler[12].fats*claras/100+FoodSimpler[32].fats*lecheDeAlmendras/100+FoodSimpler[24].fats*harinaDeAvena/100+FoodSimpler[34].fats*chocolate+FoodSimpler[7].fats*quesoFrescoBatido/100);
    let carbs = Math.floor(FoodSimpler[11].carbs*huevos+FoodSimpler[12].carbs*claras/100+FoodSimpler[32].carbs*lecheDeAlmendras/100+FoodSimpler[24].carbs*harinaDeAvena/100+FoodSimpler[34].carbs*chocolate+FoodSimpler[7].carbs*quesoFrescoBatido/100);
    let calories=protein*4 + carbs*4 + fats*9;
        setCurrentCalories(calories);
        setCurrentCarbs(carbs);
        setCurrentProtein(protein);
        setCurrentFats(fats);
        setProtein1_1(protein);
        setCarbs1_1(carbs);
        setFats1_1(fats);
        props.onMacrosChange(protein1_1, carbs1_1, fats1_1);   
  }





  return (
    
    <div>
        <Card >
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
                            <option value="1">1 (oz)</option>
                            <option value="2">2 (oz)</option>
                            <option value="3">3 (oz)</option>
                            <option value="4">4 (oz)</option>
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
                    <div className='cardResults'>
                    <h8>Carbohidratos(gr):</h8>
                    <input type="text" id="carbs" value={currentCarbs}  readOnly />
                    <h8>Proteínas (gr):</h8>
                    <input type="text" id="protein" value={currentProtein}  readOnly />
                    <h8>Grasas (gr):</h8>
                    <input type="text" id="fats" value={currentFats}  readOnly />
                    <h7>Calorías totales:</h7>
                    <input type="text" id="calories" value={currentCalories}  readOnly />
                    </div>
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
