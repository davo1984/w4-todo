// import React from 'react';
import React, { Component } from 'react';
import TodoTable from './components/TodoTable.js';
// import './App.css';

class TodoApp extends React.Component {
    constructor(props){
        super(props)
    }
      state = { 
        chores: [
          {
            name: 'Dave O',
            chore: 'buy cake',
            dueBy: 'now',
            supplies: false,
          },
          {
            name: 'Dave O',
            chore: 'eat cake',
            dueBy: 'tomorrow',
            supplies: false,
          },
          {
            name: 'Dana',
            chore: 'buy ice cream',
            dueBy: 'now',
            supplies: false,
          },
          {
            name: 'Dana',
            chore: 'eat ice cream',
            dueBy: 'tomorrow',
            supplies: false,
          },
        ],
      }

    checkComplete = index => {
      const { chores } = this.state

      this.setState({
        chores: chores.filter((chore, i) => {
          return i !== index
        }),
      })
    }
    
    removeChore = index => {
      const { chores } = this.state

      this.setState( {
        chores: chores.filter((chore, i) => {
          return i !== index
        }),
      })
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
                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>
        );
    } 
}

export default TodoApp;