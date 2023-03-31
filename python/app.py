from flask import Flask, jsonify, request
from flask_cors import CORS
app = Flask(__name__)
CORS(app)


@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    # Extract the 12 numbers from the request data
    carbs_pasta = data['carbs_pasta']
    carbs_chicken = data['carbs_chicken']
    protein_pasta = data['protein_pasta']
    fat_pasta = data['fat_pasta']
    protein_chicken = data['protein_chicken']
    fat_chicken = data['fat_chicken']
    carbs_mozzarella = data['carbs_mozzarella']
    protein_mozzarella = data['protein_mozzarella']
    fat_mozzarella = data['fat_mozzarella']
    carbs_goal = data['carbs_goal']
    protein_goal = data['protein_goal']
    fat_goal = data['fat_goal']

    # Perform the calculation using the 12 numbers
    # Define the nutritional content of each food item as a matrix
    foods = np.array([[carbs_pasta, protein_pasta, fat_pasta],
        [carbs_chicken, protein_chicken, fat_chicken],
        [carbs_mozzarella, protein_mozzarella, fat_mozzarella]])

    # Define the desired nutritional goals as a vector
    goals = np.array([carbs_goal, protein_goal, fat_goal])

    # Solve the system of linear equations using NumPy's linear algebra library
    amounts = np.linalg.lstsq(foods.T, goals, rcond=None)[0]

    # Print the grams of each food item
    
    # Return the three results as a JSON response
    return jsonify({'result1': amounts[0], 'result2': amounts[1], 'result3': amounts[2]})

if __name__ == '__main__':
    app.run(port=5000)
