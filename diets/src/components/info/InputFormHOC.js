import React from "react";
import Food from "./Food"; // Import the array of food items


export default class InputFormHOC extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        age:props.age,
        gender:props.gender,
        weight:props.weight,
        height:props.height,
        activityLevel:1,
        food:[]
      }
    }
  }



   handleAgeChanged = (event) => {
    var customer= this.state.customer;
    customer.age=event.target.value;

    this.setState({customer:customer});
  }

   handleGenderChanged = (event) => {
    var customer= this.state.customer;
    customer.gender=event.target.value;

    this.setState({customer:customer});
  }
  handleWeightChanged = (event) => {
    var customer= this.state.customer;
    customer.weight=event.target.value;

    this.setState({customer:customer});
  }
  handleHeightChanged = (event) => {
    var customer= this.state.customer;
    customer.height=event.target.value;

    this.setState({customer:customer});
  }
  handleActivityLevelChanged = (event) => {
    var customer= this.state.customer;
    customer.activityLevel=event.target.value;

    this.setState({customer:customer});
  }
  handleFoodChanged = (event) => {
    const food = event.target.value;
    const customer = this.state.customer;
  
    if (event.target.checked) {
      customer.food.push(food);
    } else {
      const index = customer.food.indexOf(food);
      if (index !== -1) {
        customer.food.splice(index, 1);
      }
    }
  
    this.setState({ customer: customer });
  };
  

   handleSubmit = (event) => {
   console.log(this.state.customer);
    event.preventDefault();
    // Handle form submission
  }
  render(){
  return (
    <form onSubmit={this.handleSubmit.bind(this)} class="row gy-2 gx-3 align-items-center">
      <div class="col-auto">
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={this.state.customer.age}
          onChange={this.handleAgeChanged.bind(this)}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="gender">Gender:</label>
        <select
          className="form-control"
          id="gender"
          value={this.state.customer.gender}
          onChange={this.handleGenderChanged.bind(this)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div class="col-auto">
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="number"
          className="form-control"
          id="weight"
          value={this.state.customer.weight}
          onChange={this.handleWeightChanged.bind(this)}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="height">Height (cm):</label>
        <input
          type="number"
          className="form-control"
          id="height"
          value={this.state.customer.height}
          onChange={this.handleHeightChanged.bind(this)}
        />
      </div>
      <div class="col-auto">
        <label htmlFor="activityLevel">Activity Level:</label>
        <input
          type="range"
          className="form-control-range"
          id="activityLevel"
          min="1"
          max="5"
          value={this.state.customer.activityLevel}
          onChange={this.handleActivityLevelChanged.bind(this)}
          list="activityLevels"
        />
        <datalist id="activityLevels">
          <option value="1">Sedentary</option>
          <option value="2">Lightly Active</option>
          <option value="3">Moderately Active</option>
          <option value="4">Very Active</option>
          <option value="5">Extremely Active</option>
      </datalist>
      </div>
      <div className="form-group">
        <label>Food:</label>
        {Food.map((food) => (
          <div key={food.name} className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              name="food"
              value={food.name}
              checked={this.state.customer.food.includes(food.name)}
              onChange={this.handleFoodChanged}
            />
            <label className="form-check-label">{food.name}</label>
          </div>
        ))}
      </div>
      <button type="submit" className="btn btn-primary"> 
        Calcular 
      </button>
    </form>
  );
}

}
