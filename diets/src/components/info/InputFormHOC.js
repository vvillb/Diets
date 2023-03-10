import React from "react";
import Food from "./info/Food"; // Import the array of food items
import '../../App.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CalculateMacros from "./CalculateMacros";

export default class InputFormHOC extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      customer: {
        age: "-",
        gender: "-",
        weight: "-",
        height: "-",
        name: "-",
        activityLevel: 1,
        food: []
      }
    }
  }



   handleAgeChanged = (event) => {
    this.setState({
      customer: {
        ...this.state.customer,
        age: event.target.value
      }
    });
  }

  handleGenderChanged = (event) => {
    this.setState({
      customer: {
        ...this.state.customer,
        gender: event.target.value
      }
    });
  }
  handleWeightChanged = (event) => {
    this.setState({
      customer: {
        ...this.state.customer,
        weight: event.target.value
      }
    });
  }
    handleHeightChanged = (event) => {
      this.setState({
        customer: {
          ...this.state.customer,
          height: event.target.value
        }
      })
    }
      handleNameChanged = (event) => {
        this.setState({
          customer: {
            ...this.state.customer,
            name: event.target.value
          }
        })
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
   event.preventDefault();
   console.log(this.state.customer);
   this.props.onSubmit(this.state.customer);
   CalculateMacros(this.state.customer.age, this.state.customer.gender, this.state.customer.height, this.state.customer.weight, this.state.customer.activityLevel)

  
    
    // Handle form submission
  };
  render(){
    const activityLevels = [
      { value: '1', label: 'Sedentary' },
      { value: '2', label: 'Lightly Active' },
      { value: '3', label: 'Moderately Active' },
      { value: '4', label: 'Very Active' },
      { value: '5', label: 'Extremely Active' },
    ]; 
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
        <label htmlFor="name">Name:</label>
        <input
          type="string"
          className="form-control"
          id="cust_name"
          value={this.state.customer.name}
          onChange={this.handleNameChanged.bind(this)}
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
        />
        <div className="d-flex justify-content-between">
          {activityLevels.map((level) => (
            <span key={level.value} className='activity-level-label'>{level.label}</span>
          ))}
        </div>
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
InputFormHOC.defaultProps = {
  onSubmit: () => {}
};