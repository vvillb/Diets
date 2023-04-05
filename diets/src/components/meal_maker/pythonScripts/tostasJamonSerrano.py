import numpy as np

def func():
    global var1, var2, var3
    
    food_macros = np.array([
        [11.6, 2.9, 1],
        [0.05, 3, 1.8],
        [11.75, 12.5, 0.25],
        [0, 0, 4.5],
        [0.59, 0.14, 0.07],
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

    current_solution = np.array([1, 1, 1, 1, 30], dtype=int)
    current_score = evaluate_solution(current_solution)

    while True:
        neighbors = [current_solution.copy() for _ in range(5)]
        
        for i in range(5):
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

    return (f"{amounts[0]:d} tostadas de pan de semillas o cereales, {amounts[1]:d} lonchas de jamón serrano (10gr/loncha), {amounts[2]:d} vaso (250ml) de leche desnatada, {amounts[3]:d} cucharaditas de aceite de oliva y {amounts[4]:d} gramos de copos de avena. Las calorías resultantes serían {round(calories):d}. Los macronutrientes resultantes serían {round(macros[0]):d} gramos de carbohidratos, {round(macros[1]):d} gramos de proteínas y {round(macros[2]):d} gramos de grasas.")

var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()
