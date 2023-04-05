import { useEffect, useState } from 'react';
import script from '../pythonScripts/PescadoArroz.py';
import Foto from '../../assets/imgs/TostasJamonCocido.png'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';




const runScript = async (code, props) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/v0.23.0/full/"
  });

 
  pyodide.globals.set('var1', props.var1);
  pyodide.globals.set('var2', props.var2);
  pyodide.globals.set('var3', props.var3);
  await pyodide.loadPackage("numpy");
  
  
  return await pyodide.runPythonAsync(code);
}



const PescadoArroz = ({ var1, var2, var3}) => {
  const [output, setOutput] = useState("...");
  const [buttonClicked, setButtonClicked] = useState(false);

// Move the useEffect code into a new function
  const runPythonScript = async () => {
    const scriptText = await (await fetch(script)).text();
    const out = await runScript(scriptText, { var1, var2, var3 });
    setOutput(out);
  };


    // Call the runPythonScript function when the button is clicked
    const handleClick = () => {
      if (!buttonClicked) {
        runPythonScript();
        setButtonClicked(true);
      }
    };

  return (
    <Card style={{ width: '18rem' }} className="mb-2">
       <Card.Img variant="top" src={Foto}/>
       <Card.Body>
       <Card.Title>Pescado blanco con arroz</Card.Title>
          <div className="App">
            <header className="App-header">
            <Button variant="primary"onClick={handleClick}>Calcular las cantidades de esta comida</Button>
              
                <Card.Text> {output}</Card.Text>
                 
             
              </header>
          </div>
      </Card.Body>
    </Card>
  );
}


export default PescadoArroz;