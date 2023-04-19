
import pulp

def func():
    global var1, var2, var3
    
    food_macros = np.array([[0.5, 11.76, 0.67],
    [0.11, 0.057, 0.019],
    [0.77, 0.072, 0.007],
    [0,0,4.5]])



    def optimize(food_macros, var1, var2, var3):
        food_count = len(food_macros)
        x = pulp.LpVariable.dicts("x", range(food_count), lowBound=0, upBound=1.5, cat='Continuous')
        prob = pulp.LpProblem("Diet", pulp.LpMinimize)
        prob += pulp.lpSum([food_macros[i][0] * x[i] for i in range(food_count)]) >= var1
        prob += pulp.lpSum([food_macros[i][1] * x[i] for i in range(food_count)]) >= var2
        prob += pulp.lpSum([food_macros[i][2] * x[i] for i in range(food_count)]) >= var3
        prob += pulp.lpSum([food_macros[i][3] * x[i] for i in range(food_count)])
        prob.solve()
        return [x[i].varValue for i in range(food_count)]

   

    
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

    current_solution = np.array([1,150,30,1], dtype=int)
    current_score = evaluate_solution(current_solution)

    while True:
        neighbors = [current_solution + np.eye(4, dtype=int)[i] for i in range(4)]
        neighbor_scores = [evaluate_solution(neighbor) for neighbor in neighbors]

        min_score = min(neighbor_scores)
        if min_score >= current_score:
            break

        current_solution = neighbors[np.argmin(neighbor_scores)]
        current_score = min_score

    
    amounts = optimize(food_macros, var1, var2, var3)
    macros = get_macros(amounts)
    calories = get_calories(macros)

   
    # Print the grams of each food item
    return (f"{amounts[0]:d} latas de atún, {amounts[1]:d} gramos de garbanzos cocidos, {amounts[2]:d} gramos de arroz {amounts[3]:d} cucharaditas de aceite de oliva. Las calorías resultantes serían {round(calories):d}. Los macronutrientes resultantes serían {round(macros[0]):d} gramos de carbohidratos, {round(macros[1]):d} gramos de proteínas y {round(macros[2]):d} gramos de grasas.")
  


var1 = globals().get('var1', 0)
var2 = globals().get('var2', 0)
var3 = globals().get('var3', 0)
func()