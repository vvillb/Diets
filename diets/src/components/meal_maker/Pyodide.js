import { useEffect, useRef, useState } from 'react';
import 'core-js';
import 'core-js/features/global-this';
import globalThis from 'core-js/features/global-this';

export default function Pyodide({
  pythonCode,
  loadingMessage = 'loading…',
  evaluatingMessage = 'evaluating…'
}) {
  const indexURL = 'https://cdn.jsdelivr.net/pyodide/dev/full/';
  const pyodide = useRef(null);
  const [result, setResult] = useState(null);
  const [isPyodideLoading, setIsPyodideLoading] = useState(true);
  const [pyodideOutput, setPyodideOutput] = useState(evaluatingMessage);
  useEffect(() => {
    (async function () {
      pyodide.current = await globalThis.loadPyodide({ indexURL });
      setIsPyodideLoading(false);
    })();
  }, [pyodide]);
  useEffect(() => {
    if (!isPyodideLoading) {
      const evaluatePython = async (pyodide, pythonCode) => {
        try {
          const result = await pyodide.runPython(pythonCode);
          setResult(result);
        } catch (error) {
          console.error(error);
          return 'Error evaluating Python code. See console for details.';
        }
      };
      (async function () {
        setPyodideOutput(JSON.stringify(await evaluatePython(pyodide.current, pythonCode)));
      })();
    }
  }, [isPyodideLoading, pyodide, pythonCode]);
  return (
    <>
    {pyodide.current && (
      <div>
        Pyodide Output: {isPyodideLoading ? loadingMessage : pyodideOutput}{result}
      </div>
    )}
  </>
);
}
