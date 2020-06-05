// import React from 'react';
import React, { Component } from 'react';
import TodoTable from './components/TodoTable.js';
import Form from './components/Form.js';
// import './App.css';

class TodoApp extends React.Component {
    constructor(props){
        super(props)
        // const toggleRowSuppliesB = toggleRowSuppliesB.bind(toggleRowSupplies);
    }

      state = { 
        chores: [
          {
            name: "Dana",
            chore: "eat cake",
            dueBy: "",
            isSupplies: false,
            isDone: false,
          },
          {
            name: "Dave O",
            chore: "rebuild house",
            dueBy: "ASAP",
            isSupplies: false,
            isDone: false,
          },
          {
            name: "Tommy",
            chore: "study",
            dueBy: "",
            isSupplies: false,
            isDone: false,
          },
        ],
  }

  toggleRowSupplies = () => {
    // console.log('in toggleSupplies: before isSupplies=', this.state.isSupplies);
    this.setState({
      isSupplies: !this.state.isSupplies
    });
  }
    render() {
      return (
        <button onClick={this.handleClick}>
          {this.state.isSupplies ? "<i class=\"far fa-check-square\"></i>" : 'ToDo'}
        </button>
      );
      // console.log("isDone=",this.state.isDone);
      // shows false before & after but the object is actually changed to false!?
    } 
    // console.log('in toggleSupplies: AFTER isSupplies=', this.state.isSupplies);
    
    toggleDone = (index) => {
      // console.log("toggleDone before: this.state.isDone=", this.state.isDone);
      // console.log("toggleDone before: state.isDone=", state.isDone);
      // console.log("toggleDone before: props.state.isDone=", props.state.isDone);
      // console.log("toggleDone before: this.props.state.isDone=", this.props.state.isDone);
      this.setState({
        isDone: !this.state.isDone
      });
    }
    
    render() {
      return (
        <button onClick={this.handleClick}>        
          {this.state.isDone ? 'Done' : 'ToDo'}
        </button>
      );
      // console.log("isDone=",this.state.isDone);
      // shows false before & after but the object is actually changed to false!?
    } 
    
    removeChore = index => {
      const { chores } = this.state;
      
      this.setState( {
        chores: chores.filter((chore, i) => {
          return i !== index
        }),
      })
    }
    
    handleSubmit = chores => {
      this.setState({ chores: [...this.state.chores, chores]})
    }
    
    render() {
      const chores  = this.state.chores
      
      return (
        <div className="App container-flex">
                    <div className="row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            <p className="display-3 text-center my-5">Honey Do List</p>
                            <TodoTable choreData = { chores } 
                              toggleDone = { this.toggleDone }
                              removeChore = { this.removeChore } 
                            />
                            <Form handleSubmit = { this.handleSubmit }/>
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
        );
      } 
    }
    
    export default TodoApp;