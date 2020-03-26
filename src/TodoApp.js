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

    checkComplete = index => {
      const { chores } = this.state;
      console.log("chores=",chores);

      // this.setState({
      //   chores: chores.filter((chore, i) => {
      //     return i !== index
      //   }),
      // })
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
                              checkComplete = { this.checkComplete }
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