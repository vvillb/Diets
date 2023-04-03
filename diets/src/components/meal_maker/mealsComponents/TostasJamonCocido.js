import { useEffect, useState } from 'react';
import script from '../pythonScripts/tostasJamonCocido.py';



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



const TostasJamonCocido = ({ var1, var2, var3}) => {
  const [output, setOutput] = useState("(loading...)");

  useEffect(() => {
    const run = async () => {
      const scriptText = await (await fetch(script)).text();
      const out = await runScript(scriptText,{ var1, var2, var3 });
      setOutput(out);
    }
    run();

  }, [var1, var2, var3]);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
           {output}
        </p>
      </header>
    </div>
  );
}

export default TostasJamonCocido;