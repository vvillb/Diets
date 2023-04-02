
import numpy as np

def func():
    global var1, var2, var3
    # Define the nutritional content of each food item as a matrix
    foods = np.array([[0.67, 0.12, 0.019],
    [0, 0.3076, 0.004],
    [0,0.27,0.26]])

    # Define the desired nutritional goals as a vector
    goals = np.array([var1, var2, var3])

    # Solve the system of linear equations using NumPy's linear algebra library
    amounts = np.linalg.lstsq(foods.T, goals, rcond=None)[0]

    # Print the grams of each food item
    return (f"Pasta: {amounts[0]:.2f} grams, Chicken: {amounts[1]:.2f} grams, Mozzarella: {amounts[2]:.2f} grams")
  


var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()