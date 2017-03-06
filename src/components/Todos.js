import React from 'react';
import TodosValues from './TodosValues';
import Todo from './Todo';
import * as TodoActions from '../actions/TodoActions';

export default class Todos extends React.Component{
  constructor(){
    super();
    
    this.state = {
      todos: TodosValues.getAll(),
    };
  }
  
  change_result(id){
    TodosValues.change_complete(id);
    this.setState({
      todos: TodosValues.getAll(),
    });
  }
  
  editTodo(){
    this.setState({
      todos: TodosValues.getAll(),
    });
  }
  
  createTodo(){
    TodoActions.createTodo(this.new_name.value, this.new_text_val.value);
    
    this.setState({
      todos: TodosValues.getAll(),
    });
    
    this.new_name.value = "";
    this.new_text_val.value = "";
  }
  
  render(){
    const {todos} = this.state;
    
    const TodoComponents = todos.map((todo) => { return <Todo key={todo.id} {...todo} changeresult={this.change_result.bind(this)} edit_todo={this.editTodo.bind(this)} /> });
    
    return (
      <div className="col-md-12">
        <h1>Todos</h1>
        
        <table className="table"> 
          <tbody>
            <tr>
              <td><b>Event name</b></td>
              <td><b>Event description</b></td>
              <td><b>Completed</b></td>
              <td></td>
              <td></td>
            </tr>
            
            <tr>
              <td><input type="text" id="name" ref={(input) => { this.new_name = input; }} /></td>
              <td><input type="text" id="text_val" ref={(input) => { this.new_text_val = input; }} /></td>
              <td></td>
              <td><button type="button" className="btn btn-primary" onClick={this.createTodo.bind(this)}>Add new</button></td>       <td></td>
            </tr>

            {TodoComponents}
            
            
          </tbody>
        </table>
      </div>
    );
  }
}