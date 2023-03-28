import React,{useState,useEffect} from 'react'
import FoodSimpler from '../info/FoodSimpler';
import Card from 'react-bootstrap/Card';
import '../../../App.css'

function Poke(props) {
  const [currentCarbs, setCurrentCarbs] = useState(0);
  const [currentProtein, setCurrentProtein] = useState(0);
  const [currentFats, setCurrentFats] = useState(0);
  const [currentCalories, setCurrentCalories] = useState(0);
  const [aceite,setAceite]=useState(2);
  const [salmon,setSalmon]=useState(200);
  const [quinoa,setQuinoa]=useState(42);
  const [almendras,setAlmendras]=useState(30); 
  const [pan,setPan]=useState(1);
  const[protein2_1,setProtein2_1]=useState(0);
  const[carbs2_1,setCarbs2_1]=useState(0);
  const[fats2_1,setFats2_1]=useState(0);

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
    let protein = Math.floor((FoodSimpler[33].prot*aceite)+(FoodSimpler[9].prot*salmon/100)+(FoodSimpler[23].prot*quinoa/100)+(FoodSimpler[29].prot*almendras/100)+(FoodSimpler[15].prot*pan));
    let fats =Math.floor(FoodSimpler[33].fats*aceite+FoodSimpler[9].fats*salmon/100+FoodSimpler[23].fats*quinoa/100+FoodSimpler[29].fats*almendras/100+FoodSimpler[15].fats*pan);
    let carbs = Math.floor(FoodSimpler[33].carbs*aceite+FoodSimpler[9].carbs*salmon/100+FoodSimpler[23].carbs*quinoa/100+FoodSimpler[29].carbs*almendras/100+FoodSimpler[15].carbs*pan);
    let calories=protein*4 + carbs*4 + fats*9;
        setCurrentCalories(calories);
        setCurrentCarbs(carbs);
        setCurrentProtein(protein);
        setCurrentFats(fats);
        setProtein2_1(protein);
        setCarbs2_1(carbs);
        setFats2_1(fats);
        props.onMacrosChange(protein2_1, carbs2_1, fats2_1);   
  }


  console.table(FoodSimpler[23])
  console.log("protes")
  console.log(FoodSimpler[33].prot*aceite)
  console.log(FoodSimpler[9].prot*salmon/100)
  console.log(FoodSimpler[23].prot*quinoa/100)
  console.log(FoodSimpler[29].prot*almendras/100)
  console.log(FoodSimpler[15].prot*pan)
  console.log("carbs")
  console.log(FoodSimpler[33].carbs*aceite)
  console.log(FoodSimpler[9].carbs*salmon/100)
  console.log(FoodSimpler[23].carbs*quinoa/100)
  console.log(FoodSimpler[29].carbs*almendras/100)
  console.log(FoodSimpler[15].carbs*pan)
  console.log("fats")
  console.log(FoodSimpler[33].fats*aceite)
  console.log(FoodSimpler[9].fats*salmon/100)
  console.log(FoodSimpler[23].fats*quinoa/100)
  console.log(FoodSimpler[29].fats*almendras/100)
  console.log(FoodSimpler[15].fats*pan)



  return (
    
    <div>
        <Card >
            <Card.Body>
                <Card.Title>Poke Bowl</Card.Title>
                <form>
                    <div class="col-auto">
                        <label>aceite</label>
                        <select
                            className="form-control"
                            id="aceite"
                            value={aceite}
                            onChange={event=>setAceite(event.target.value)}
                        >
                            <option value="1">un chorrito (1 cdta)</option>
                            <option value="2">un chorro (2 cdtas)</option>
                            <option value="3">1 cucharada</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Salmón </label>
                        <select
                            className="form-control"
                            id="salmon"
                            value={salmon}
                            onChange={event=>setSalmon(event.target.value)}
                        >
                            <option value="100">1 filete (100 gr)</option>
                            <option value="150">1 filete y medio (150 gr)</option>
                            <option value="200">2 filetes (200 gr)</option>
                            <option value="250">2 filetes y medio (250 gr)</option>
                            <option value="300">3 filetes (300 gr)</option>
                            
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Quinoa</label>
                        <select
                            className="form-control"
                            id="quinoa"
                            value={quinoa}
                            onChange={event=>setQuinoa(event.target.value)}
                        >
                            <option value="42">Una tarrina de quinoa al micro </option>
                            <option value="63">Una + 1/2 tarrinas de quinoa al micro</option>
                            <option value="84">Dos tarrinas de quinoa al micro </option>

                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Almendras, Anacardos, Pistachos...</label>
                        <select
                            className="form-control"
                            id="almendras"
                            value={almendras}
                            onChange={event=>setAlmendras(event.target.value)}
                        >
                            <option value="30">un puñado (30gr)</option>
                            <option value="60">dos puñados (60gr)</option>
                            <option value="90">tres puñados (90gr)</option>
                        </select>
                    </div>
                    <div class="col-auto">
                        <label>Pan de cereales o semillas</label>
                        <select
                            className="form-control"
                            id="pan"
                            value={pan}
                            onChange={event=>setPan(event.target.value)}
                        >
                            <option value="1">1 rebanada</option>
                            <option value="2">2 rebanadas</option>
                            <option value="3">3 rebanadas</option>
                            <option value="4">4 rebanadas</option>
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

export default Poke 
