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
        activityLevel:props.activityLevel,
        selectedFood:props.selectedFood
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
    const selectedFood = event.target.value;
    this.setState(prevState => ({
      customer: {
        ...prevState.customer,
        selectedFood
      }
    }));
  }
  

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
          min="0"
          max="10"
          value={this.state.customer.activityLevel}
          onChange={this.handleActivityLevelChanged.bind(this)}
        />
      </div>
      <div className="form-group">
        <label>Food:</label>
        {Food.map((food) => (
          <div key={food.name} className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="food"
              value={food.name}
              checked={this.state.customer.selectedFood === food.name}
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
