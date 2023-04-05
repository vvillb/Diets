
import numpy as np

def func():
    global var1, var2, var3
    # Define the nutritional content of each food item as a matrix
    foods = np.array([[0, 0.2162, 0.06],
    [0.66, 0.14, 0.06],
    [0.054,0.24,0.56],
    [0,0,4.5]])

    # Define the desired nutritional goals as a vector
    goals = np.array([var1, var2, var3])

    # Solve the system of linear equations using NumPy's linear algebra library
    amounts = np.linalg.lstsq(foods.T, goals, rcond=None)[0]

    # Print the grams of each food item
    return (f"{amounts[0]:.2f} gramos de salmón, {amounts[1]:.2f} gramos de quinoa,{amounts[2]:.2f} gramos de almendras,  {amounts[3]:.2f} cucharaditas de aceite de oliva")
  


var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()