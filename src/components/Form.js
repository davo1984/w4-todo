import React, { Component } from "react"

class Form extends Component {
  initialState = {
    name: "",
    chore: "",
    dueBy: "",
    isSupplies: false,
    isDone: false,
  }
  state = this.initialState;
  
  handleChange = event => {
    const { name, value } = event.target;
    console.log('name',name);
    this.setState({
      [name]: value,
    })
  } 

  toggleSupplies = () => {
    console.log('in toggleSupplies: before isSupplies=', this.state.isSupplies);
    this.setState({
      isSupplies: !this.state.isSupplies
    })
    console.log('in toggleSupplies: AFTER isSupplies=', this.state.isSupplies);
  }

  submitForm =  () => {
    this.props.handleSubmit( this.state )
    this.setState(this.initialState)
  }
  
  render() {
    const { name, chore, dueBy, supplies, done } = this.state;
    return (
      <form>
        <label htmlFor = "name">Name</label>
        <input 
          type = "text"
          name = "name"
          id = "name"
          value = { name }
          onChange = {this.handleChange } />
        <input 
          type = "text"
          name = "chore"
          id = "chore" 
          value = { chore }
            onChange={this.handleChange} />
        <input
          type = "text"
          name = "dueBy"
          id = "dueBy"
          value = { dueBy }
          onChange={this.handleChange} />
            {/* type="checkbox" class="form-check-input" id="exampleCheck1" */}
        <label class="form-check-label" for="supplies">Have Everything?</label>
        <input type="checkbox" id="supplies" className="form-check-input" onClick={this.toggleSupplies} />
        <input type="button" value="Submit" className="btn btn-primary border border-rounded" onClick={this.submitForm} />
      </form>
    )
  }
}

export default Form;