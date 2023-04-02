import { useEffect, useState } from 'react';
import script from './main.py';



const runScript = async (code, props) => {
  const pyodide = await window.loadPyodide({
    indexURL : "https://cdn.jsdelivr.net/pyodide/dev/full/"
  });
  pyodide.globals.set("my_var", props.myVar);

  return await pyodide.runPythonAsync(code);
}


const TestPyodide = ({ myVar}) => {
  const [output, setOutput] = useState("(loading...)");

  useEffect(() => {
    const run = async () => {
      const scriptText = await (await fetch(script)).text();
      const out = await runScript(scriptText,{ myVar });
      setOutput(out);
    }
    run();

  }, [myVar]);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          5 + 7 = {output}
        </p>
      </header>
    </div>
  );
}

export default TestPyodide;