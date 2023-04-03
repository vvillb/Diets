import { useEffect, useState } from 'react';
import script from '../pythonScripts/smoothieBowl.py';



const runScript = async (code, props) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/dev/full/"
  });

 
  pyodide.globals.set('var1', props.var1);
  pyodide.globals.set('var2', props.var2);
  pyodide.globals.set('var3', props.var3);
  await pyodide.loadPackage("numpy");
  
  
  return await pyodide.runPythonAsync(code);
}



const SmoothieBowl = ({ var1, var2, var3}) => {
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
    <div className="App">
      <header className="App-header">
      <button onClick={handleClick}>Calcular las cantidades de esta comida</button>
        <p>
           {output}
        </p>
      </header>
    </div>
  );
}

export default SmoothieBowl;