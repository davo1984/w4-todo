import React, { Component } from 'react';

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th scope="col">Name</th>
        <th scope="col">Chore</th>
        <th scope="col">Date</th>
        <th scope="col">Supplies</th>
        <th scope="col">Done</th>
      </tr>
    </thead>
  );
}
  
  const TableBody = (props) => {
    console.log(props);
    const tableLine = props.choreData.map((row, index) => {
      return (
        <tr scope="row" key={index}>
          <td> {row.name}</td>
          <td> {row.chore}</td>
          <td> {row.dueBy}</td>
          <td>
            <button type="button" className="badge badge-pill badge-success" onClick={() =>
              props.toggleRowSupplies(index)}>Supplies</button> {row.supplies}
          </td>
          <td>
            <button type="button" className="badge badge-pill badge-success" onClick={() =>
              props.toggleDone(index)}>ToDo</button>
          </td>
          <td>
            <button type="button" className="badge badge-pill badge-warning" onClick = {() => 
                props.removeChore(index)}>Delete</button>
          </td>
        </tr>
      );
    });
    return <tbody>{tableLine}</tbody>
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
        <table className="table">
          <TableHeader />
          <TableBody 
            choreData = { this.props.choreData } 
            toggleRowSupplies = { this.props.toggleRowSupplies }
            toggleDone = { this.props.toggleDone }
            removeChore = { this.props.removeChore } />
        </table>
      );
    }
}

export default TodoTable