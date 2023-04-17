import numpy as np



def func():
    
    global var1, var2, var3
    
    food_macros = np.array([
        [0.035,0.08,0],
        [0.59, 0.14, 0.07],
        [0.137, 0.152, 0.652],
        [17.3, 0.06, 0],
        
    ])

    def get_macros(amounts):
        return np.dot(amounts, food_macros)

    def get_calories(macros):
        return 4 * (macros[0] + macros[1]) + 9 * macros[2]

    def evaluate_solution(solution):
        macros = get_macros(solution)
        calories = get_calories(macros)
        goal_calories = var1 * 4 + var2 * 4 + var3 * 9
        if calories > 1.05 * goal_calories:
            return float('inf')
        error = np.abs(var1 - macros[0]) + np.abs(var2 - macros[1]) + np.abs(var3 - macros[2])
        return error

    current_solution = np.array([150, 20, 15,1], dtype=int)
    current_score = evaluate_solution(current_solution)

    while True:
        neighbors = [current_solution.copy() for _ in range(4)]
        
        for i in range(4):
            if i == 2:
                neighbors[i][i] = 1 - neighbors[i][i]  # Toggle between 0 and 1
            else:
                neighbors[i][i] += 1
                
        neighbor_scores = [evaluate_solution(neighbor) for neighbor in neighbors]

        min_score = min(neighbor_scores)
        if min_score >= current_score:
            break

        current_solution = neighbors[np.argmin(neighbor_scores)]
        current_score = min_score

    macros = get_macros(current_solution)
    calories = get_calories(macros)
    amounts = current_solution

    return (f"{amounts[0]:d} ml de queso fresco batido, {amounts[1]:d} grs de copos de avena  , {amounts[2]:d} grs de nueces y {amounts[3]:d} cucharada(s) de miel ({21*amounts[3]:d} grs). Las calorías resultantes serían {round(calories):d}. Los macronutrientes resultantes serían {round(macros[0]):d} gramos de carbohidratos, {round(macros[1]):d} gramos de proteínas y {round(macros[2]):d} gramos de grasas.")

var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()
