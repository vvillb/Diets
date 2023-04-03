
import numpy as np

def func():
    global var1, var2, var3
    
    food_macros = np.array([[11.6, 2.9, 1],
    [0.4, 6.3, 5],
    [0.035,0.08,0],
    [0,0,4.5]])

    def get_macros(amounts):
        return np.dot(amounts, food_macros)

    def get_calories(macros):
        return 4 * (macros[0] + macros[1]) + 9 * macros[2]

    def evaluate_solution(solution):
        macros = get_macros(solution)
        error = np.abs(var1 - macros[0]) + np.abs(var2 - macros[1]) + np.abs(var3 - macros[2])
        return error

    current_solution = np.array([1,1,100,1], dtype=int)
    current_score = evaluate_solution(current_solution)

    while True:
        neighbors = [current_solution + np.eye(4, dtype=int)[i] for i in range(4)]
        neighbor_scores = [evaluate_solution(neighbor) for neighbor in neighbors]

        min_score = min(neighbor_scores)
        if min_score >= current_score:
            break

        current_solution = neighbors[np.argmin(neighbor_scores)]
        current_score = min_score

    macros = get_macros(current_solution)
    calories = get_calories(macros)
    amounts = current_solution
    

   
    # Print the grams of each food item
    return (f"{amounts[0]:d} tostadas de pan de semillas o cereales, {amounts[1]:d} huevos revueltos, {amounts[2]:d} ml de queso fresco batido, {amounts[3]:d} cucharaditas de aceite de oliva. Las calorías resultantes serían {round(calories):d}. Los macronutrientes resultantes serían {round(macros[0]):d} gramos de carbohidratos, {round(macros[1]):d} gramos de proteínas y {round(macros[2]):d} gramos de grasas.")
  


var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()