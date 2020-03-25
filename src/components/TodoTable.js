// import React from 'react';
import React, { Component } from 'react';
// import './App.css';


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Chore</th>
        <th>Date</th>
        <th>Supplies</th>
        <th>Finished</th>
      </tr>
    </thead>
  );
}
  
  const TableBody = (props) => {
    console.log(props);
    const tableLine = props.choreData.map((row, index) => {
      return (
        <tr key = { index }>
          <td> { row.name }</td>
          <td> { row.chore }</td>
          <td> { row.dueBy }</td>
          <td> {row.supplies}</td>
          <td>
            <button onClick={() =>
                props.checkComplete(index)}>Done</button>
          </td>
          <td>
            <button onClick = {() => 
                props.removeChore(index)}>Delete</button>
          </td>
        </tr>
      );
    });
    return <tbody> { tableLine } </tbody>
  }
  
  
class TodoTable extends Component {
    constructor(props){
        super(props)
      const choreData  = props.choreData;
      const removeChore = props.removeChore;
      console.log(props);
    }

    render() {
      return (
        <table>
          <TableHeader />
          <TableBody choreData = { this.props.choreData } 
            removeChore = { this.props.removeChore } />
        </table>
      );
    }
}

export default TodoTable