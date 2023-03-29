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
    print (f"Pasta: {amounts[0]:.2f} grams")
    print(f"Chicken: {amounts[1]:.2f} grams")
    print(f"Mozzarella: {amounts[2]:.2f} grams")
    




# Call the function with all four arguments
calculate_macro_split(0.005, 0.22, 0.018,0.02, 0.17, 0.14,0.67, 0.12, 0.019,50, 43, 10)
