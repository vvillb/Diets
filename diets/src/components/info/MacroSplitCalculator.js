import React ,{useState} from 'react'
import { loadPyodide } from "pyodide";



function MacroSplitCalculator() {
    const [result, setResult] = useState(null);

    const calculateMeal = async () => {
    // Initialize Pyodide
    const pyodide = await loadPyodide({ indexURL : "https://cdn.jsdelivr.net/pyodide/v0.22.1/full/" });

    // Load the micropip package manager
    await pyodide.loadPackage("micropip");
      
    // Install the required packages
    await pyodide.runPythonAsync("import micropip\nawait micropip.install('numpy')");

    // Load the Python script
    await pyodide.runPython(`
    import numpy as np

    def calculate_macro_split(carbs_pasta, protein_pasta, fat_pasta,
        carbs_chicken, protein_chicken, fat_chicken,
        carbs_mozzarella, protein_mozzarella, fat_mozzarella,
        carbs_goal, protein_goal, fat_goal):
        # Define the nutritional content of each food item as a matrix
        foods = np.array([[carbs_pasta, protein_pasta, fat_pasta],
            [carbs_chicken, protein_chicken, fat_chicken],
            [carbs_mozzarella, protein_mozzarella, fat_mozzarella]])

        # Define the desired nutritional goals as a vector
        goals = np.array([carbs_goal, protein_goal, fat_goal])

        # Solve the system of linear equations using NumPy's linear algebra library
        amounts = np.linalg.lstsq(foods.T, goals, rcond=None)[0]

        # Print the grams of each food item
        return (f" 1 {amounts[0]:.2f} grams, 2 {amounts[1]:.2f} grams, 3  {amounts[2]:.2f} grams")
        
    

        
            
      `);
  
      // Call the Python function
      const calculate_meal = pyodide.globals.get("calculate_macro_split");
        const chickenData = [0.005, 0.22, 0.018];
        const mozzarellaData = [0.02, 0.17, 0.14];
        const pastaData = [0.67, 0.12, 0.019];
        const targets = [50, 43, 10];
        const result = calculate_meal(0.005, 0.22, 0.018,0.02, 0.17, 0.14,0.67, 0.12, 0.019,50, 43, 10);
  
      // Update the state with the result
      setResult(result);
    };
  
    return (
      <div>
        <button onClick={calculateMeal}>Calculate Meal</button>
        {result && (
          <div>
            {result}
          </div>
        )}
      </div>
    );
  }
export default MacroSplitCalculator
