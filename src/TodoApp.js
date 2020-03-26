// import React from 'react';
import React, { Component } from 'react';
import TodoTable from './components/TodoTable.js';
import Form from './components/Form.js';
// import './App.css';

class TodoApp extends React.Component {
    constructor(props){
        super(props)
    }
      state = { 
        chores: [],
  }

  toggleDone = (index) => {
    console.log("toggleDone before: this.state.isDone=", this.state.isDone);
    // console.log("toggleDone before: state.isDone=", state.isDone);
    // console.log("toggleDone before: props.state.isDone=", props.state.isDone);
    // console.log("toggleDone before: this.props.state.isDone=", this.props.state.isDone);
    this.setState({
      isDone: !this.state.isDone
    })
    console.log("isDone=",this.state.isDone);
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