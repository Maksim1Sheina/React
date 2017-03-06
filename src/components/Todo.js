import React from 'react';
import * as TodoActions from '../actions/TodoActions';

export default class Todo extends React.Component{  
  constructor(){
    super();
    
    this.state = {
      id: false,
    };    
  }
  
  complete_result(complete_val){
    return complete_val ? '\u2713' : '\u2718';
  }
  
  edit_change(){
    return this.state.id ? this.setState({id: false}) : this.setState({id: true});
  }
  
  handleChangeEdit_Complete(e){
    this.props.changeresult(this.props.id);
  }
  
  editTodo(e){
    TodoActions.editTodo(this.props.id, this.new_name.value, this.new_text.value);
    this.props.edit_todo();
    this.setState({id: false});
  }
  
  deleteTodo(e){
    TodoActions.deleteTodo(this.props.id);
    this.props.edit_todo();
    this.setState({id: false});
  }
  
  render(){
    const todo_value = this.props;
    
    if(todo_value != null && this.state.id === false){
        return(
        <tr>
          <td>{todo_value.name}</td>
          <td>{todo_value.text}</td>
          <td><button type="button" className="btn btn-default" onClick={this.handleChangeEdit_Complete.bind(this)}>{this.complete_result(todo_value.complete)}</button></td>
          <td><button type="button" className="btn btn-primary" onClick={this.edit_change.bind(this)}>Edit</button></td>
          <td><button type="button" className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>Delete</button></td>
        </tr>
      );
    }
  
    else if(this.state.id === true){
      return(
        <tr>
          <td><input type="text" id="name" defaultValue={todo_value.name} ref={(input) => { this.new_name = input; }} /></td>
          <td><input type="text" id="text" defaultValue={todo_value.text} ref={(input) => { this.new_text = input; }} /></td>
          <td><button type="button" className="btn btn-default" onClick={this.handleChangeEdit_Complete.bind(this)}>{this.complete_result(todo_value.complete)}</button></td>
          <td><button type="button" className="btn btn-success" onClick={this.editTodo.bind(this)}>Apply</button></td>
          <td><button type="button" className="btn btn-danger" onClick={this.deleteTodo.bind(this)}>Delete</button></td>
        </tr>
      );
    }
  }
}