import React from "react";
import InputFormHOC from "./InputFormHOC";
import CalculateMacros from "./CalculateMacros";


export default class ParentComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: null
    };
  }

  handleCustomerSubmit = (customer) => {
    this.setState({ customer });
  }

  render() {
    return (
      <div>
        <InputFormHOC onSubmit={this.handleCustomerSubmit} />
        <CalculateMacros customer={this.state.customer} />
        
      </div>
    );
  }
}
