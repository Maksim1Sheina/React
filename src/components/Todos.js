import React from 'react';
import TodosValues from './TodosValues';
import Todo from './Todo';

export default class Todos extends React.Component{
  constructor(){
    super();
    
    this.state = {
      todos: TodosValues.getAll(),
    };
  }
  
  render(){
    const {todos} = this.state;
    
    const TodoComponents = todos.map((todo) => { return <Todo key={todo.id} {...todo} /> });
    
    return (
      <div className="col-md-12">
        <h1>Todos</h1>
        
        <table className="table"> 
          <tbody>
            <tr>
              <td><b>Event name</b></td>
              <td><b>Event description</b></td>
              <td><b>Completed</b></td>
            </tr>

            {TodoComponents}
      
          </tbody>
        </table>
      </div>
    );
  }
}